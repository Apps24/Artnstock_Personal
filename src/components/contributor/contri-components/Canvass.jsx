import { useState, useRef, useEffect } from 'react';
import { useImperativeHandle } from 'react';

const Canvass = ({
  photo,
  sizeRangeValue,
  vertcalAlign,
  horzontalAlign,
}) => {
  // const [sizeRangeWidth, setSizeRangeWidth] = useState(0);
  // const [sizeRangeHeight, setSizeRangeHeight] = useState(0);
  const [sizeRangeWidth, setSizeRangeWidth] = useState(154);
  const [sizeRangeHeight, setSizeRangeHeight] = useState(256);

  const [imagePosition, setImagePosition] = useState({
    x: (154 - sizeRangeWidth) / 2,
    y: (256 - sizeRangeHeight) / 2,
  });

  // const [imageVerticalPosition, setImageVerticalPosition] = useState({
  //   x: (154 - sizeRangeWidth) / 2,
  // });

  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = imageRef.current;

    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    tempCanvas.width = sizeRangeWidth;
    tempCanvas.height = sizeRangeHeight;

    image.onload = () => {
      tempCtx.drawImage(image, 0, 0, sizeRangeWidth, sizeRangeHeight);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(tempCanvas, imagePosition.x, imagePosition.y);
    };

    image.src = photo;
  }, [imagePosition, photo, sizeRangeWidth, sizeRangeHeight]);

  useEffect(() => {
    // calculate new canvas dimensions
    const newHeight = sizeRangeValue * 4.12;
    const newWidth = newHeight / 1.807017543859649;

    // calculate difference between old and new dimensions
    const widthDiff = newWidth - sizeRangeWidth;
    const heightDiff = newHeight - sizeRangeHeight;

    // update canvas dimensions and image position
    setSizeRangeWidth(newWidth);
    setSizeRangeHeight(newHeight);
    setImagePosition({
      x: imagePosition.x - widthDiff / 2,
      y: imagePosition.y - heightDiff / 2,
    });
  }, [sizeRangeValue]);

  useEffect(() => {
    imageRef.current.src = photo;
  }, [photo]);

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const startX = offsetX - imagePosition.x;
    const startY = offsetY - imagePosition.y;

    const handleMouseMove = (e) => {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      setImagePosition({
        x: offsetX - startX,
        y: offsetY - startY,
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleSaveClick = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Save the current canvas size and position
    const originalWidth = canvas.width;
    const originalHeight = canvas.height;
    const originalPosition = { ...imagePosition };

    // Resize the canvas to match the current image size
    canvas.width = sizeRangeWidth;
    canvas.height = sizeRangeHeight;

    // Draw a white background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, sizeRangeWidth, sizeRangeHeight);

    // Draw the image
    ctx.drawImage(
      imageRef.current,
      imagePosition.x,
      imagePosition.y,
      sizeRangeWidth,
      sizeRangeHeight
    );

    // Create a data URL for the canvas image
    const dataUrl = canvas.toDataURL('image/png');

    // Restore the original canvas size and position
    canvas.width = originalWidth;
    canvas.height = originalHeight;
    setImagePosition(originalPosition);

    // Create a link element to download the image
    const downloadLink = document.createElement('a');
    downloadLink.download = 'canvas.png';
    downloadLink.href = dataUrl;

    // Trigger a click event on the link to download the image
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  useEffect(() => {
    if (vertcalAlign === true || vertcalAlign === false) {
      setImagePosition((prevImagePosition) => ({
        ...prevImagePosition,
        y: (256 - sizeRangeHeight) / 2,
      }));
    }
  }, [vertcalAlign]);

  useEffect(() => {
    if (horzontalAlign === true || horzontalAlign === false) {
      setImagePosition((prevImagePosition) => ({
        ...prevImagePosition,
        x: (154 - sizeRangeWidth) / 2,
      }));
    }
  }, [horzontalAlign]);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={154}
        height={256}
        className='cursor-move'
        onMouseDown={handleMouseDown}
      />
      <img ref={imageRef} alt='shirt' className='hidden' />
    </>
  );
};

export default Canvass;

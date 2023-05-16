import ContriBanner from '../contri-banner/Contri-Banner';
import iconart from '../../../../src/assets/images/contributor/icon-art.png';
import iconphotos from '../../../../src/assets/images/contributor/icon-photos.png';
import iconfootage from '../../../../src/assets/images/contributor/icon-footage.png';
import icontemplates from '../../../../src/assets/images/contributor/icon-templates.png';

const UploadFile = () => {
  return (
    <>
      {/*Section 1 banner */}
      <ContriBanner />
      {/*Section 2*/}
      <div>
        <p className='w-[100%] text-center text-[12px] text-[#757575] py-[40px]'>
          Artnstock / Sell on Artnstock / Technical Specifications
        </p>
      </div>
      {/*Section 3 */}
      <div className='2xl:px-[464px] px-[20px] text-[14px]'>
        {/*Section 3.1*/}
        <div className='pb-[25px]'>
          <p>
            All of the files you upload will be checked by our
            inspectors, and once they pass inspection, they'll appear
            on the website. Starting from that moment, they are
            available to Buyers, and can start turning a profit!
          </p>
          <p className='pt-[25px] text-primaryGray'>
            By accepting the{' '}
            <span className='text-orangeColor'>
              Terms of Service, License Agreement, Privacy Policy
            </span>{' '}
            and{' '}
            <span className='text-orangeColor'>
              Copyright and Trademark Policy
            </span>{' '}
            of Artnstock that you sign while creating a Artnstock's
            account, and uploading your files to our website, you
            warrant the following:
          </p>
          <ul className='text-primaryGray'>
            <li>• You are the author of all the files you upload.</li>
            <li>• You are 18 or older.</li>
            <li>
              • You possess all the required documents and rights
              allowing you to display and use your files as well as
              their related elements (model releases, property
              releases, minor releases).
            </li>
            <li>
              • All of the files you upload will be checked by our
              inspectors, and once they pass inspection, they'll
              appear on the website. Starting from that moment, they
              are available to buyers, and can start turning a profit.
            </li>
          </ul>
        </div>

        <hr className='border-[lightGray]' />
        {/*Section 3.2*/}
        <div className='py-[25px]'>
          <p className='text-primaryBlack text-[25px]'>
            Files Upload Limit
          </p>
          <p className='text-primaryGray pt-[25px]'>
            Our review team handles hundreds of thousands of file
            submissions every week. To ensure a timely and consistent
            turnaround for our global community of contributors, we
            limit the rate of weekly submissions.
          </p>
          <p className='text-primaryGray pt-[25px]'>
            Artnstock contributors can submit up to{' '}
            <span className='text-primaryBlack'>
              250 Art, 250 Photos, 90 Video Clips, 90 Music Tracks and
              250 Templates during any 7 day period.
            </span>{' '}
            The 7-day timeframe is a rolling window. If you exceed the
            submission limit, you will receive a pop-up message on the
            dashboard of your account page, that will remain until the
            limit window expires.
          </p>
          <div className='flex gap-[15px] pt-[20px]'>
            <div>
              <img src={iconart} alt='' />
              <p className='text-[25px] text-center'>250</p>
            </div>
            <div>
              <img src={iconphotos} alt='' />
              <p className='text-[25px] text-center'>250</p>
            </div>
            <div>
              <img src={iconfootage} alt='' />
              <p className='text-[25px] text-center'>90</p>
            </div>
            <div>
              <img src={icontemplates} alt='' />
              <p className='text-[25px] text-center'>250</p>
            </div>
          </div>
          <p className='text-[11px] text-primaryGray'>
            Weekly submissions with approval rate more than 80%
          </p>
          <p className='text-primaryGray pt-[20px]'>
            Contributors with more than 500 files online and an
            approval ratio higher than 80% are eligible to submit
            2-times more than the current upload limit. Feature
            available only based on{' '}
            <span className='text-orangeColor'>
              application request
            </span>
            .
          </p>

          <table className='table mt-[20px] border-separate border-spacing-0'>
            <caption className='border text-[15px] py-[8px] rounded-tr-[10px] rounded-tl-[10px] bg-[#ececec] border-[#dddddd]'>
              Files Upload Limit Per Week
            </caption>
            <thead>
              <tr className='text-[13px]'>
                <th className='border pr-[40px] py-[6px] pl-[6px] font-normal bg-[#ececec] border-[#dddddd]'>
                  Approval Percentage
                </th>
                <th className='border-t border-r border-b px-[37px] font-normal bg-[#f3f3f3] border-[#dddddd]'>
                  Art
                </th>
                <th className='border-t border-r border-b px-[26px] font-normal bg-[#f3f3f3] border-[#dddddd]'>
                  Photos
                </th>
                <th className='border-t border-r border-b px-[26px] font-normal bg-[#f3f3f3] border-[#dddddd]'>
                  Footage
                </th>
                <th className='border-t border-r border-b px-[30px] font-normal bg-[#f3f3f3] border-[#dddddd]'>
                  Music
                </th>
                <th className='border-t border-r border-b px-[21px] font-normal bg-[#f3f3f3] border-[#dddddd]'>
                  Templates
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] bg-[#feeeee] border-[#dddddd]'>
                  Higher than 80%
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#fef4f4] border-[#dddddd]'>
                  250
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#fef4f4] border-[#dddddd]'>
                  250
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#fef4f4] border-[#dddddd]'>
                  90
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#fef4f4] border-[#dddddd]'>
                  90
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#fef4f4] border-[#dddddd]'>
                  250
                </td>
              </tr>
              <tr>
                <td className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] bg-[#f7f7f7] border-[#dddddd]'>
                  Between 60% - 80%
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#ffffff] border-[#dddddd]'>
                  200
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#ffffff] border-[#dddddd]'>
                  200
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#ffffff] border-[#dddddd]'>
                  70
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#ffffff] border-[#dddddd]'>
                  70
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#ffffff] border-[#dddddd]'>
                  200
                </td>
              </tr>
              <tr>
                <td className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] bg-[#f7f7f7] border-[#dddddd]'>
                  Between 40% - 60%
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#ffffff] border-[#dddddd]'>
                  150
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#ffffff] border-[#dddddd]'>
                  150
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#ffffff] border-[#dddddd]'>
                  50
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#ffffff] border-[#dddddd]'>
                  50
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#ffffff] border-[#dddddd]'>
                  150
                </td>
              </tr>
              <tr>
                <td className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] bg-[#f7f7f7] border-[#dddddd]'>
                  Between 20% - 40%
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#ffffff] border-[#dddddd]'>
                  100
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#ffffff] border-[#dddddd]'>
                  100
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#ffffff] border-[#dddddd]'>
                  30
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#ffffff] border-[#dddddd]'>
                  30
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#ffffff] border-[#dddddd]'>
                  100
                </td>
              </tr>
              <tr>
                <td className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] bg-[#f7f7f7] border-[#dddddd] rounded-bl-[10px]'>
                  Between 0% - 20%
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#ffffff] border-[#dddddd]'>
                  50
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#ffffff] border-[#dddddd]'>
                  50
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#ffffff] border-[#dddddd]'>
                  10
                </td>
                <td className='border-r border-b text-center text-primaryGray bg-[#ffffff] border-[#dddddd]'>
                  10
                </td>
                <td className='border-r border-b text-center text-primaryGray rounded-br-[10px] bg-[#ffffff] border-[#dddddd]'>
                  50
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr className='border-[lightGray] mt-[5px]' />
        <div className='py-[25px]'>
          <p className='text-primaryBlack text-[25px]'>
            Technical File Requirements
          </p>
          <p className='text-primaryBlack text-[18px] pt-[25px] pb-[20px]'>
            Art
          </p>
          <p className='text-primaryGray'>
            To make sure your designs are printing well on products,
            you’ve got to keep Dimensions and Format in mind. When
            uploading your files, please make sure that your files are
            saved in RGB and not CMYK. Only JPEG (raster image), PNG
            (raster image) and EPS (vector image) files will be
            accepted.
          </p>
          <p className='py-[25px] text-primaryGray'>
            Most products require different minimum dimensions to
            ensure a high print quality. If your goal is to enable all
            products Artnstock has to offer including large format
            products like curtains, bedding, outdoor items, wall
            murals, and furniture, we recommend starting with a
            horizontal asset that’s 14040 x 9930 Pixels, a vertical
            asset that’s 9930 x 14040 Pixels, and a square asset
            that’s 14040 x 14040 Pixels (any one of these dimensions)
            at 300 dpi. For certain cut-and-sew products like
            backpacks, duffle bags, and all over graphic tees, we
            recommend referencing our{' '}
            <span className='text-orangeColor'>print templates</span>{' '}
            with required pixels and dimensions to ensure your artwork
            is correctly placed.
          </p>
          <table className='table border-separate border-spacing-0'>
            <caption className='border text-[15px] py-[8px] rounded-tr-[10px] rounded-tl-[10px] border-[#dddddd] bg-[#ececec]'>
              Art Image Specifications
            </caption>
            <thead>
              <tr className='text-[13px]'>
                <th className='border pr-[45px] py-[6px] pl-[6px] font-normal border-[#dddddd] bg-[#f3f3f3]'>
                  Image Dimensions
                </th>
                <th className='border-t border-r border-b px-[36px] font-normal border-[#dddddd] bg-[#f3f3f3]'>
                  Inches
                </th>
                <th className='border-t border-r border-b px-[36px] font-normal border-[#dddddd] bg-[#f3f3f3]'>
                  Centimeters
                </th>
                <th className='border-t border-r border-b px-[36px] font-normal border-[#dddddd] bg-[#f3f3f3]'>
                  Milimeters
                </th>
                <th className='border-t border-r border-b px-[36px] font-normal border-[#dddddd] bg-[#f3f3f3]'>
                  Pixels
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  rowspan='2'
                  className='border-r border-b border-l text-[13px]  py-[6px] pl-[6px] border-[#dddddd] bg-[#feeeee]'
                >
                  Horizontal Image Size
                </td>
                <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                  47 x 33
                </td>
                <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                  119.38 x 83.82
                </td>
                <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                  1193.8 x 838.2
                </td>
                <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                  14100 x 9900
                </td>
              </tr>
              <tr>
                <td
                  colspan='4'
                  className='border-r border-b text-[11px] text-primaryGray border-[#dddddd] bg-[#fef4f4] pl-[6px]'
                >
                  Width: Fixed 47 in / 119.38 cm / 1193.8 mm / 14100
                  px
                  <br />
                  Height: Between 25 - 33 in / 63.5 - 83.82 cm / 635 -
                  838.2 mm / 7425 - 9900 px
                </td>
              </tr>
              <tr>
                <td
                  rowspan='2'
                  className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#feeeee]'
                >
                  Vertical Image Size
                </td>
                <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                  33 x 47
                </td>
                <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                  83.82 x 119.38
                </td>
                <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                  838.2 x 1193.8
                </td>
                <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                  9900 x 14100
                </td>
              </tr>
              <tr>
                <td
                  colspan='4'
                  className='border-r border-b text-[11px] text-primaryGray border-[#dddddd] bg-[#fef4f4] pl-[6px]'
                >
                  Width: Between 25 - 33 in / 63.5 - 83.82 cm / 635 -
                  838.2 mm / 7425 - 9900 px
                  <br />
                  Height: Fixed 47 in / 119.33 cm / 1193.8 mm / 14100
                  px
                </td>
              </tr>
              <tr>
                <td
                  rowspan='2'
                  className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#feeeee]'
                >
                  Square Image Size
                </td>
                <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                  47 x 47
                </td>
                <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                  119.33 x 119.33
                </td>
                <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                  1193.8 x 1193.8
                </td>
                <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                  14100 x 14100
                </td>
              </tr>
              <tr>
                <td
                  colspan='4'
                  className='border-r border-b text-[11px] text-primaryGray border-[#dddddd] bg-[#fef4f4] pl-[6px]'
                >
                  Fixed Width & Height
                  <br />
                  47 x 47 in / 119.33 x 119.33 cm / 1193.8 x 1193.8 mm
                  / 14100 x 14100 px
                </td>
              </tr>
              <tr>
                <td className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                  Image Resolution
                </td>
                <td
                  colspan='4'
                  className='border-r border-b text-primaryGray border-[#dddddd] pl-[6px]'
                >
                  300 DPI
                </td>
              </tr>
              <tr>
                <td className='border-r border-b border-lborder-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                  Colour Space
                </td>
                <td
                  colspan='4'
                  className='border-r border-b text-primaryGray border-[#dddddd] pl-[6px]'
                >
                  RGB
                </td>
              </tr>
              <tr>
                <td className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                  Colour Profile
                </td>
                <td
                  colspan='4'
                  className='border-r border-b text-primaryGray border-[#dddddd] pl-[6px]'
                >
                  sRGB IEC61966-2.1
                </td>
              </tr>
              <tr>
                <td className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                  File Format
                </td>
                <td
                  colspan='4'
                  className='border-r border-b text-primaryGray border-[#dddddd] pl-[6px]'
                >
                  JPEG (Quality: Maximum)
                </td>
              </tr>
              <tr>
                <td className='border-r border-b border-l rounded-bl-[10px] text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                  File Size Limit
                </td>
                <td
                  colspan='4'
                  className='border-r border-b rounded-br-[10px] text-primaryGray border-[#dddddd] pl-[6px]'
                >
                  Maximum 100 MB
                </td>
              </tr>
            </tbody>
          </table>

          <table className='table mt-[20px] border-separate border-spacing-0'>
            <caption className='border text-[15px] py-[8px] rounded-tr-[10px] rounded-tl-[10px] border-[#dddddd] bg-[#ececec]'>
              Vector Image Specifications
            </caption>

            <tbody>
              <tr>
                <td className='border text-[13px] py-[6px] pl-[6px] pr-[75px] border-[#dddddd] bg-[#f7f7f7]'>
                  Colour Space
                </td>
                <td className='border-t border-r border-b text-primaryGray border-[#dddddd] pl-[6px]'>
                  RGB
                </td>
              </tr>
              <tr>
                <td className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                  Colour Profile
                </td>
                <td className='border-r border-b text-primaryGray border-[#dddddd] pl-[6px]'>
                  sRGB IEC61966-2.1
                </td>
              </tr>
              <tr>
                <td className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                  File Format
                </td>
                <td className='border-r border-b pr-[197px] text-primaryGray border-[#dddddd] pl-[6px]'>
                  EPS (Compatible with Adobe Illustrator 8 or 10)
                </td>
              </tr>
              <tr>
                <td className='border-r border-b border-l rounded-bl-[10px] text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                  File Size Limit
                </td>
                <td className='border-r border-b text-primaryGray rounded-br-[10px] border-[#dddddd] pl-[6px]'>
                  Maximum 50 MB
                </td>
              </tr>
            </tbody>
          </table>

          <div className='text-primaryGray text-[12px] mt-[20px]'>
            <p>
              • You must include a JPEG file preview of Horizontal:
              2400 x 1697 Pixels (300 DPI) or Vertical: 1697 x 2400
              Pixels (300 DPI) or Square: 2400 x 2400 Pixels (300 DPI)
            </p>
            <p>• We do not accept PSD or TIFF files for Art.</p>
            <p>
              • No greater than 100 MB (art image) and 50 MB (vector
              image).
            </p>
            <p>
              • We recommend referencing our “Required Pixels &
              Dimensions” page to ensure your artwork is correctly
              placed.
            </p>
          </div>
          <button type='button' className='greenBlueButton mt-[20px]'>
            Required Pixels & Dimensions
          </button>

          <div>
            <p className='text-primaryBlack text-[18px] font-medium mt-[25px]'>
              Photos
            </p>
            <p className='text-[14px] text-primaryGray mt-[15px]'>
              We accept images only in JPEG formats. Artnstock images
              are offered in sRGB since most images on the Internet
              are displayed in that profile. If you submit images in a
              different colour profile, the colours will likely be
              altered during conversion to sRGB, so we recommend
              converting your images to sRGB before uploading them to
              Artnstock.
            </p>
            <p className='text-[14px] text-primaryGray mt-[15px]'>
              All images must be set at highest quality settings to
              produce an acceptable file dimension for submission to
              Artnstock.
            </p>
            <table className='table mt-[20px] border-separate border-spacing-0'>
              <caption className='border text-[15px] py-[8px] rounded-tr-[10px] rounded-tl-[10px] border-[#dddddd] bg-[#ececec]'>
                Photo Image Specifications
              </caption>
              <thead>
                <tr className='text-[13px]'>
                  <th className='border pr-[45px] py-[6px] pl-[6px] font-normal border-[#dddddd] bg-[#f3f3f3]'>
                    Image Dimensions
                  </th>
                  <th className='border-t border-r border-b px-[36px] font-normal border-[#dddddd] bg-[#f3f3f3]'>
                    Inches
                  </th>
                  <th className='border-t border-r border-b px-[36px] font-normal border-[#dddddd] bg-[#f3f3f3]'>
                    Centimeters
                  </th>
                  <th className='border-t border-r border-b px-[36px] font-normal border-[#dddddd] bg-[#f3f3f3]'>
                    Milimeters
                  </th>
                  <th className='border-t border-r border-b px-[36px] font-normal border-[#dddddd] bg-[#f3f3f3]'>
                    Pixels
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    rowspan='2'
                    className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#feeeee]'
                  >
                    Horizontal Image Size
                  </td>
                  <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                    36 x 24
                  </td>
                  <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                    91.44 x 60.96
                  </td>
                  <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                    914.4 x 609.6
                  </td>
                  <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                    10800 x 7200
                  </td>
                </tr>
                <tr>
                  <td
                    colspan='4'
                    className='border-r border-b text-[11px] text-primaryGray border-[#dddddd] bg-[#fef4f4] pl-[6px]'
                  >
                    Width: Fixed 36 in / 91.44 cm / 914.4 mm / 10800
                    px
                    <br />
                    Height: Between 16 - 24 in / 40.64 - 60.96 cm /
                    406.4 - 609.6 mm / 4800 - 7200 px
                  </td>
                </tr>
                <tr>
                  <td
                    rowspan='2'
                    className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#feeeee]'
                  >
                    Vertical Image Size
                  </td>
                  <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                    24 x 36
                  </td>
                  <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                    60.96 x 91.44
                  </td>
                  <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                    609.6 x 914.4
                  </td>
                  <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                    7200 x 10800
                  </td>
                </tr>
                <tr>
                  <td
                    colspan='4'
                    className='border-r border-b text-[11px] text-primaryGray border-[#dddddd] bg-[#fef4f4] pl-[6px]'
                  >
                    Width: Between 16 - 24 in / 40.64 - 60.96 cm /
                    406.4 - 609.6 mm / 4800 - 7200 px
                    <br />
                    Height: Fixed 36 in / 91.44 cm / 914.4 mm / 10800
                    px
                  </td>
                </tr>
                <tr>
                  <td
                    rowspan='2'
                    className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#feeeee]'
                  >
                    Square Image Size
                  </td>
                  <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                    36 x 36
                  </td>
                  <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                    91.44 x 91.44
                  </td>
                  <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                    914.4 x 914.4
                  </td>
                  <td className='border-r border-b text-center text-primaryGray border-[#dddddd] bg-[#fef4f4]'>
                    10800 x 10800
                  </td>
                </tr>
                <tr>
                  <td
                    colspan='4'
                    className='border-r border-b text-[11px] text-primaryGray border-[#dddddd] bg-[#fef4f4] pl-[6px]'
                  >
                    Fixed Width & Height
                    <br />
                    36 x 36 in / 91.44 x 91.44 cm / 914.4 x 914.4 mm /
                    10800 x 10800 px
                  </td>
                </tr>
                <tr>
                  <td className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                    Image Resolution
                  </td>
                  <td
                    colspan='4'
                    className='border-r border-b text-primaryGray border-[#dddddd] pl-[6px]'
                  >
                    300 DPI
                  </td>
                </tr>
                <tr>
                  <td className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                    Colour Space
                  </td>
                  <td
                    colspan='4'
                    className='border-r border-b text-primaryGray border-[#dddddd] pl-[6px]'
                  >
                    RGB
                  </td>
                </tr>
                <tr>
                  <td className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                    Colour Profile
                  </td>
                  <td
                    colspan='4'
                    className='border-r border-b text-primaryGray border-[#dddddd] pl-[6px]'
                  >
                    sRGB IEC61966-2.1
                  </td>
                </tr>
                <tr>
                  <td className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                    File Format
                  </td>
                  <td
                    colspan='4'
                    className='border-r border-b text-primaryGray border-[#dddddd] pl-[6px]'
                  >
                    JPEG (Quality: Maximum)
                  </td>
                </tr>
                <tr>
                  <td className='border-r border-b border-l rounded-bl-[10px] text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                    File Size Limit
                  </td>
                  <td
                    colspan='4'
                    className='border-r border-b rounded-br-[10px] text-primaryGray border-[#dddddd] pl-[6px]'
                  >
                    Maximum 50 MB
                  </td>
                </tr>
              </tbody>
            </table>
            <p className='text-[12px] text-primaryGray mt-[15px]'>
              • We do not accept PSD or TIFF files for Photos.
            </p>
            <p className='text-[12px] text-primaryGray'>
              • We do not accept still frames from video files as they
              do not meet our technical quality standards.
            </p>
          </div>

          <div className='mt-[25px]'>
            <p className='text-primaryBlack text-[18px] font-medium '>
              Footage
            </p>
            <p className='text-[14px] text-primaryGray mt-[15px]'>
              Submitted clips must fit the specified formats. Clips
              should be between 5 and 60 seconds and no larger than
              4GB. All footage should be prepared as QuickTime MOV or
              MP4 files.
            </p>
            <p className='text-[14px] text-primaryGray mt-[15px]'>
              We will accept HD video recorded with a mobile device,
              but please keep the following in mind: When transferring
              your footage from your phone to your computer please be
              sure to use the device cable. Emailing/messaging the
              video as an attachment will result in loss of quality.
              Please keep in mind that on most phones the user-facing
              camera has a much lower resolution than the camera
              facing away from the user. We recommend you to only use
              the camera with the highest resolution.
            </p>
            <table className='table mt-[20px] border-separate border-spacing-0'>
              <caption className='border text-[15px] py-[8px] rounded-tr-[10px] rounded-tl-[10px] border-[#dddddd] bg-[#ececec]'>
                Footage File Specifications
              </caption>

              <tbody>
                <tr>
                  <td className='border text-[13px] py-[6px] pl-[6px] pr-[75px] border-[#dddddd] bg-[#feeeee]'>
                    Clip Duration
                  </td>
                  <td className='border-t border-r border-b text-primaryGray border-[#dddddd] bg-[#fef4f4] pl-[6px]'>
                    5 -60 Secondsborder-r border-b
                  </td>
                </tr>
                <tr>
                  <td className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                    Frames-Per-Second
                  </td>
                  <td className='border-r border-b text-primaryGray border-[#dddddd] pl-[6px]'>
                    23.98, 24, 25, 29.97, 30, 47.95, 47.96, 48, 50,
                    59.94, 60
                  </td>
                </tr>
                <tr>
                  <td className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                    Resolution
                  </td>
                  <td className='border-r border-b pr-[248px] text-primaryGray border-[#dddddd] pl-[6px]'>
                    4K (4096 x 2160) and HD (1920 x 1080)
                  </td>
                </tr>
                <tr>
                  <td className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                    File Format
                  </td>
                  <td className='border-r border-b text-primaryGray border-[#dddddd] pl-[6px]'>
                    ASF, AVI, DV, FLV, MOV, MPEG/MPG, WMV
                  </td>
                </tr>
                <tr>
                  <td className='border-r border-b border-l rounded-bl-[10px] text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                    File Size Limit
                  </td>
                  <td className='border-r border-b rounded-br-[10px] text-primaryGray border-[#dddddd] pl-[6px]'>
                    Maximum 250 MB
                  </td>
                </tr>
              </tbody>
            </table>
            <p className='text-[12px] text-primaryGray mt-[15px]'>
              We prefer HD and 4K footage, but accept any types and
              resolutions listed below. <br />
              Resolutions in bold are preferred.
            </p>
            <div className='flex text-[12px] primaryGray gap-[8px] mt-[15px]'>
              <div>
                <p>4K</p>
                <p>2K & 2.5K</p>
                <p>HD</p>
              </div>
              <div>
                <p>
                  - 4096 x 2160 4096 x 2160 4096 x 2304 4000 x 2160
                  3840 x 2160 3996 x 2160 4800 x 2700
                </p>
                <p>
                  - 2048 x 1080  2400 x 1350  2432 x 1366  2702 x 1520
                   2704 x 1520 
                </p>
                <p>
                  - 1920 x 1080  1280 x 720  1440 x 1080 1888 x 1062 
                  1920 x 1088
                </p>
              </div>
            </div>
          </div>

          <div className='mt-[25px]'>
            <p className='text-primaryBlack text-[18px] font-medium '>
              Music (Exclusive)
            </p>
            <p className='text-[14px] text-primaryGray mt-[15px]'>
              Artnstock provides the best platform for sharing your
              royalty-free music with the world. Here is what you need
              to know before joining our community of contributing
              artists and producers.
            </p>
            <p className='text-[14px] text-primaryGray mt-[15px]'>
              The onboarding for a music contributor is different from
              the experience for a footage or image contributor to
              Artnstock. We currently work with a very small number of
              music contributors, so we are able to provide more
              individualized support. When onboarded, each music
              contributor is assigned an individual representative
              from the music content team who will work with them on
              producing the best possible tracks for our collection.
            </p>
            <p className='text-[14px] text-primaryGray mt-[15px]'>
              The terms of our music contributor agreement and payout
              scheme are also different than that for other types of
              media.
            </p>
            <table className='table mt-[20px] border-separate border-spacing-0'>
              <caption className='border text-[15px] py-[8px] rounded-tr-[10px] rounded-tl-[10px] border-[#dddddd] bg-[#ececec]'>
                Music File Specifications
              </caption>

              <tbody>
                <tr>
                  <td className='border text-[13px] py-[6px] pl-[6px] pr-[75px] border-[#dddddd] bg-[#feeeee]'>
                    Clip Duration
                  </td>
                  <td className='border-t border-r border-b text-primaryGray border-[#dddddd] bg-[#fef4f4] pl-[6px]'>
                    2:30 - 3:00 Minutes
                  </td>
                </tr>
                <tr>
                  <td className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                    File Format
                  </td>
                  <td className='border-r border-b text-primaryGray border-[#dddddd] pl-[6px]'>
                    WAV, MP3 and AIF/AIFF
                  </td>
                </tr>
                <tr>
                  <td className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                    Bit depth
                  </td>
                  <td className='border-r border-b pr-[417px] text-primaryGray border-[#dddddd] pl-[6px]'>
                    16 or 24 bit
                  </td>
                </tr>
                <tr>
                  <td className='border-r border-b border-l text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                    Sample Rate
                  </td>
                  <td className='border-r border-b text-primaryGray border-[#dddddd] pl-[6px]'>
                    44.1 or 48 kHz
                  </td>
                </tr>
                <tr>
                  <td className='border-r border-b border-l rounded-bl-[10px] text-[13px] py-[6px] pl-[6px] border-[#dddddd] bg-[#f7f7f7]'>
                    File Size Limit
                  </td>
                  <td className='border-r border-b rounded-br-[10px] text-primaryGray border-[#dddddd] pl-[6px]'>
                    Maximum 50 MB
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='flex flex-col text-[12px] text-primaryGray mt-[15px]'>
              <span>We do not accept:</span>
              <span>• Sound-alikes </span>
              <span>
                • Uncleared samples (Samples from sound libraries that
                allow for production music library use are acceptable)
              </span>
              <span>• Sound effects</span>
              <span>
                • Covers and compositions that are not 100% original
              </span>
            </div>
            <button
              type='button'
              className='greenBlueButton mt-[20px]'
            >
              How do I become a Music Contributor
            </button>{' '}
            <br />
            <div className='text-center mt-[25px]'>
              <label className='text-[12px] primaryGray w-[100%]'>
                <input className='mr-[17px]' type='checkbox' />I
                acknowledge and warrant that I have read and agree
                with Artnstock’s uploading Terms and Conditions.
              </label>{' '}
              <br />
              <div className='flex gap-[15px] justify-center mt-[25px] pb-[70px]'>
                <button className='blackBtn'>Continue</button>
                <button className='px-6 py-2.5 rounded-3xl text-sm14 text-primaryBlack border-[2px]'>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UploadFile;

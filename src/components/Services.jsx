function Services() {
  return (
    <>
      <div className="bg-[#DEE2E6] - h-[100%] flex justify-center items-center"> 
        <div className=" pt-[70px] pb-[70px]">
        <b>
          <h2 className="text-center text-[45px]">Services</h2>
        </b>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Proin <br />
          tristique elit nec malesuada tincidunt. Pellentesque lobortis.
          </p>
          <div className="flex justify-center items-center flex-wrap h-[100%] bg-[#DEE2E6]">
            <div className="text-center p-5 mt-4 mb-4 mr-1 text-white bg-[#212529] rounded-lg shadow-md">
              <div className="flex justify-center text-center">
              <img src="/img/icons/web-design.webp" alt=""  />
             
              </div>
              <h3 className="p-2">Web Development</h3>
              <p>
                Lorem ipsum dolor sit <br />
                amet, consectetur <br />
                adipiscing elit. Proin <br />
                tristique elit nec
              </p>
            </div>
            <div className="text-center p-5  m-6 text-white bg-[#212529] rounded-lg shadow-md">
              <div className="flex justify-center text-center">
              <img src="/img/icons/web-development.webp" alt=""  />
             
              </div>
              <h3 className="p-2">Web Design</h3>
              <p>
                Lorem ipsum dolor sit <br />
                amet, consectetur <br />
                adipiscing elit. Proin <br />
                tristique elit nec
              </p>
            </div>
            <div className="text-center p-5 mt-4 mb-4 ml-1 text-white bg-[#212529] rounded-lg shadow-md">
              <div className="flex justify-center text-center">
              <img src="/img/icons/mobile.webp" alt=""  />
             
              </div>
              <h3 className="p-2">App Design</h3>
              <p>
                Lorem ipsum dolor sit <br />
                amet, consectetur <br />
                adipiscing elit. Proin <br />
                tristique elit nec
              </p>
            </div>
            
          </div>
          </div>
      </div>
    </>
  );
}
export default Services;

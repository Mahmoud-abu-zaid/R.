function Footer() {
  return (
    <>
      <div className="bg-[#DEE2E6] p-4 "> 
        <div className="text-center text-[45px] mb-3">
          <h2>Contact</h2>
        </div>
        <div className=" flex justify-center  flex-wrap">
          <div>
            <form>
              <h3>Send me message</h3>
              <div>
                <input type="email" name="" id="" placeholder="Email" className="m-1 bg-[#212529] rounded-md p-1" />
                <input type="text" placeholder="Name" className="m-1 bg-[#212529] rounded-md p-1" />
              </div>
              <textarea name="" id="" cols="50" rows="5" placeholder="Message" className=" m-1 bg-[#212529] rounded-md p-1"></textarea>
              <div className="text-end">
                <button className="bg-white p-2 rounded-md">Send</button>
              </div>
            </form>
          </div>
          <div>
            <h3>Social Media</h3>
            <div>
              <p>
                <img src="/img/icons/github.webp" alt="" className="inline-block p-2" />
                <span>***************</span>
              </p>
              <p>
                <img src="/img/icons/whatsapp.png" alt="" className="inline-block p-2" />
                <span>***************</span>
              </p>
              <p>
                <img src="/img/icons/instagram.png" alt="" className="inline-block p-2" />
                <span>***************</span>
              </p>
              <p>
                <img src="/img/icons/facebook.png" alt="" className="inline-block p-2" />
                <span>***************</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;

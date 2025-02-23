import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userMassage, setUserMassage] = useState("");
  return (
    <>
      <div className="flex items-center justify-center h-[90vh] bg-[#DEE2E6]">
        <div className="p-2 pb-5 ">
          <div className="text-center text-[45px] mb-3">
            <h2>Contact</h2>
          </div>
          <div className=" flex justify-center  flex-wrap">
            <div>
              {/* onSubmit={(eo) => eo.preventDefault()} تستخدم الارسال البيانات دون عمل اعادة تحميل للصفحة */}
              <form onSubmit={(eo) => eo.preventDefault()}>
                <h3>Send me message</h3>
                <div>
                  
                  <input
                    onChange={(eo) => {
                      console.log(setEmail(eo.target.value));
                      setEmail(eo.target.value);
                    }}
                    type="email"
                    name="email"
                    id=""
                    placeholder="Email"
                    autoFocus
                    required
                    className="m-1 bg-[#212529] rounded-md p-1 w-[48%]"
                  />
                  <input onChange={(eo) => setUserName(eo.target.value)} type="text" placeholder="Name" autoFocus required className="m-1 bg-[#212529] rounded-md p-1 w-[47%]" />
                </div>
                <textarea onChange={(eo) => setUserMassage(eo.target.value)} name="" id="" placeholder="Message" className=" m-1 bg-[#212529] rounded-md p-1 w-[98%] h-[90px]"></textarea>
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
      </div>
    </>
  );
}
export default Footer;

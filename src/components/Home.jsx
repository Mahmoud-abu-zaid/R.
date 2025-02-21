import MyButton from "./MyButton";

function Home() {
  return (
    <>
      <div className="flex justify-around items-center flex-wrap bg-[#DEE2E6] pt-[30px]">
        <div className="items-center">
          <b>
            <h1 className="text-[#212529] text-[63px] leading-[1.3]">
              Hello <br />
              I’m Ridho
            </h1>
          </b>
          <p className="text-[#212529]">Freelancer Web Developer</p>
          <MyButton />
        </div>
        <div>
          <img src="/img/user.webp" alt="user.img" />
        </div>
      </div>
    </>
  );
}
export default Home;

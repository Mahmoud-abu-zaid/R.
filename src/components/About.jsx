import MyButton from "./MyButton";

function About() {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap p-[70px] ">
        <div>
         <b> <h2 className="text-[50px] m-5 ">
            About <br /> me
          </h2>
          </b>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Nesciunt pariatur nisi error? Eius commodi id alias <br />
            voluptates nisi tenetur obcaecati eum aliquid, <br />
            sed distinctio dicta labore expedita quia
          </p>
          <div className="flex">
          <MyButton  className="mr-4"/>
          <MyButton />
          </div>
        
        </div>
      </div>
    </>
  );
}
export default About;

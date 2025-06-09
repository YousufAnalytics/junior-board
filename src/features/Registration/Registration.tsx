import React, { useState } from "react";
import Input from "../../components/ui/Input";
import Label from "../../components/ui/Label";
import RoleToggle from "../../components/ui/RoleToggle";


type recruiterState = {
  companyName : string;
  registrationName : string;
  mobileNumber : string
}

const Registration = () => {
  const [role, setRole] = useState<"candidate" | "recruiter">("candidate");

  const [recruiterPayload,setRecruiterPayload] = useState<recruiterState>({
    companyName : "",
    registrationName : "",
    mobileNumber : ""
  })

  const recruiterRegistrationHandler = (event:any) => {
    event.preventDefault()
    console.log(recruiterPayload)
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50 px-4 select-none">
      <div className="bg-white rounded-1xl shadow-xl w-full max-w-md p-8">

        <RoleToggle value={role} onChange={setRole} />

        <form className="space-y-5">
          {role === "candidate" ? (
            <>
              <div>
                <Label name="Full Name" />
                <Input type="text" placeholder="Enter your name" />
              </div>
              <div>
                <Label name="Email" />
                <Input type="email" placeholder="Enter email" />
              </div>
              <div>
                <Label name="Mobile Number" />
                <Input type="tel" placeholder="Enter mobile number" />
              </div>
            </>
          ) : (
            <>
              <div>
                <Label name="Company Name" />
                <Input type="text" placeholder="Enter company name" change={(event) => setRecruiterPayload({
                  ...recruiterPayload,
                  companyName : event.target.value
                })} />
              </div>
              <div>
                <Label name="Registration Name" />
                <Input type="text" placeholder="Enter registration name" change={(event) => setRecruiterPayload({
                  ...recruiterPayload,
                  registrationName : event.target.value
                })}/>
              </div>
              <div>
                <Label name="Mobile Number" />
                <Input type="tel" placeholder="Enter mobile number" change={(event) => setRecruiterPayload({
                  ...recruiterPayload,
                  mobileNumber : event.target.value
                })} />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 rounded-lg transition duration-300"
            onClick={recruiterRegistrationHandler}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;

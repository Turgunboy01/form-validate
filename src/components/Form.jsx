// src/StudentForm.js
import React from "react";
import { useForm } from "react-hook-form";
import { InputMask } from "primereact/inputmask";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const generateDays = () => {
  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }
  return days;
};

const generateYears = (startYear, endYear) => {
  const years = [];
  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }
  return years;
};

const StudentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const days = generateDays();
  const years = generateYears(1990, 2024);

  return (
    <div className="  bg-blue-50 rounded-md ">
      <div className="py-[2.5em] px-[50px] border-b border-b-[#03597e]">
        <h1 className="text-[2em]  text-[#005875] font-semibold ">
          Registration Form
        </h1>
        <p className=" text-[1em] text-[#03597e]">
          Fill out the form carefully for registration
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="py-[2.5em] px-[50px] ">
        <div className="">
          <label className="block text-[#015e94] font-bold mb-2">
            Student Name
          </label>
          <div className="flex space-x-4 mb-5">
            <div className="w-1/3 flex flex-col ">
              <input
                className="p-2 border border-[#005875] rounded focus:border-[#005875]"
                type="text"
                id="firstName"
                placeholder="First Name"
                {...register("firstName", {
                  required: "First Name is required",
                })}
              />
              <label
                htmlFor="firstName"
                className="text-[.75em] ml-[2px] mt-[11px] text-[#205a76]"
              >
                First Name
              </label>
              {errors.firstName && (
                <p className="text-red-500 text-[13px] ml-[2px]">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="w-1/3 flex flex-col">
              <input
                className="p-2 border border-[#005875] rounded focus:border-[#005875]"
                type="text"
                id="middle"
                placeholder="Middle Name"
                {...register("middleName")}
              />
              <label
                htmlFor="middle"
                className="text-[.75em] ml-[2px] mt-[11px] text-[#205a76]"
              >
                Middle Name
              </label>
            </div>
            <div className="w-1/3 flex flex-col  ">
              <input
                className="p-2 border border-[#005875] rounded focus:border-[#005875]"
                type="text"
                id="lastName"
                placeholder="Last Name"
                {...register("lastName", { required: "Last Name is required" })}
              />
              <label
                className="text-[.75em] ml-[2px] mt-[11px] text-[#205a76]"
                htmlFor="lastName"
              >
                Last Name
              </label>
              {errors.lastName && (
                <p className="text-red-500 text-[13px] ml-[2px]">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-[30px]">
          <div className="mb-4 w-[50%]">
            <label
              className="block text-[#015e94] font-bold mb-2"
              htmlFor="birthDate"
            >
              Birth Date
            </label>
            <div className="flex space-x-4">
              <div className="flex flex-col">
                <select
                  id="month"
                  className=" p-2 border border-[#015e94] rounded bg-[#fff] text-[#0f5d9d]"
                  {...register("birthMonth", { required: "Month is required" })}
                >
                  <option value="">Please</option>
                  {months.map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <label
                  className="text-[.75em] ml-[2px] mt-[11px] text-[#205a76] "
                  htmlFor="month"
                >
                  Month
                </label>
                {errors.birthMonth && (
                  <p className="text-red-500 text-[11px] ml-[2px]">
                    {errors.birthMonth.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <select
                  id="day"
                  className=" p-2 border border-[#015e94] rounded bg-[#fff] text-[#0f5d9d]"
                  {...register("birthDay", { required: "Day is required" })}
                >
                  <option value="">Please</option>
                  {days.map((day, index) => (
                    <option key={index} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
                <label
                  htmlFor="day"
                  className="text-[.75em] ml-[2px] mt-[11px] text-[#205a76]"
                >
                  Day
                </label>
                {errors.birthDay && (
                  <p className="text-red-500 text-[11px] ml-[2px]">
                    {errors.birthDay.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <select
                  className=" p-2 border border-[#015e94] rounded bg-[#fff] text-[#0f5d9d]"
                  {...register("birthYear", { required: "Year is required" })}
                  id="year"
                >
                  <option value="">Please</option>
                  {years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <label
                  className="text-[.75em] ml-[2px] mt-[11px] text-[#205a76]"
                  htmlFor="year"
                >
                  Year
                </label>
                {errors.birthYear && (
                  <p className="text-red-500 text-[11px] ml-[2px]">
                    {errors.birthYear.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mb-4 w-[50%]">
            <label
              className="block text-[#015e94] font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              id="gender"
              className="w-full p-2 border border-[#015e94] rounded bg-[#fff] text-[#0f5d9d]"
              {...register("gender", { required: "Gender is required" })}
            >
              <option value="">Please Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-[11px] mt-[6px] ml-[2px]">
                {errors.gender.message}
              </p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-[#015e94] font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <div className="pb-6">
            <input
              className="w-full p-2 border border-[#015e94]  rounded bg-[#fff] text-[#0f5d9d] "
              type="text"
              id="adress1"
              {...register("address", {
                required: "Street Address is required",
              })}
            />
            <label
              className="text-[.75em] ml-[2px] mt-[13px] text-[#205a76]"
              htmlFor="adress1"
            >
              Street Address
            </label>
            {errors.address && (
              <p className="text-red-500 text-[11px] mt-[6px] ml-[2px]">
                {errors.address.message}
              </p>
            )}
          </div>
          <div className="pb-6">
            <input
              className="w-full p-2 border border-[#015e94]  rounded bg-[#fff] text-[#0f5d9d] "
              type="text"
              id="adress2"
              {...register("addressLine2")}
            />{" "}
            <label
              className="text-[.75em] ml-[2px] mt-[11px] text-[#205a76]"
              htmlFor="adress2"
            >
              Street Address Line 2
            </label>
          </div>
          <div className="flex gap-[30px]">
            <div className="w-[50%] flex flex-col mb-2">
              <input
                className="w-full p-2 border border-[#015e94]  rounded bg-[#fff] text-[#0f5d9d] "
                type="text"
                placeholder="City"
                id="city"
                {...register("city", { required: "City is required" })}
              />
              <label
                className="text-[.75em] ml-[2px] mt-[11px] text-[#205a76]"
                htmlFor="city"
              >
                City
              </label>
              {errors.city && (
                <p className="text-red-500 text-[11px] mt-[6px] ml-[2px]">
                  {errors.city.message}
                </p>
              )}
            </div>
            <div className=" w-[50%] flex flex-col">
              <input
                className="w-full p-2 border border-[#015e94]  rounded bg-[#fff] text-[#0f5d9d] "
                type="text"
                id="state"
                {...register("state", { required: "State is required" })}
              />
              <label
                className="text-[.75em] ml-[2px] mt-[11px] text-[#205a76]"
                htmlFor="state"
              >
                State / Province
              </label>
              {errors.state && (
                <p className="text-red-500 text-[11px] mt-[6px] ml-[2px]">
                  {errors.state.message}
                </p>
              )}
            </div>
          </div>
          <div className="pb-6">
            <input
              className="w-full p-2 border border-[#015e94]  rounded bg-[#fff] text-[#0f5d9d] "
              type="text"
              id="zip"
              {...register("postalCode", {
                required: "Postal / Zip Code is required",
              })}
            />
            <label
              className="text-[.75em] ml-[2px] mt-[11px] text-[#205a76]"
              htmlFor="zip"
            >
              Postal / Zip Code
            </label>
            {errors.postalCode && (
              <p className="text-red-500 text-[11px] mt-[6px] ml-[2px]">
                {errors.postalCode.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-[30px]">
          <div className="mb-4 w-[50%]">
            <label
              className="block text-[#015e97] font-bold mb-2"
              htmlFor="email"
            >
              Student E-mail
            </label>
            <input
              className="w-full p-2 border border-[#015e94]  rounded bg-[#fff] text-[#0f5d9d] "
              type="email"
              id="email"
              placeholder="ex: myname@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <label className="text-[.75em] ml-[2px] mt-[13px] text-[#205a76]">
              example@example.com
            </label>
            {errors.email && (
              <p className="text-red-500 text-[11px] mt-[6px] ml-[2px]">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4 w-[50%]">
            <label
              className="block text-[#015e97] font-bold mb-2"
              htmlFor="mobileNumber"
            >
              Mobile Number
            </label>
            <InputMask
              id="mobileNumber"
              className="w-full p-2 border border-[#015e94]  rounded bg-[#fff] text-[#0f5d9d] "
              mask="(999) 999-9999"
              placeholder="(000) 000-0000"
              {...register("mobileNumber", {
                required: "Mobile Number is required",
                pattern: {
                  value: /^\(\d{3}\) \d{3}-\d{4}$/,
                  message: "Invalid mobile number format",
                },
              })}
            ></InputMask>
            {errors.mobileNumber && (
              <p className="text-red-500 text-[11px] mt-[6px] ml-[2px]">
                {errors.mobileNumber.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-[30px]">
          <div className="mb-4 w-[50%]">
            <label
              htmlFor="phone"
              className="block text-[#015e97] font-bold mb-2"
            >
              Phone
            </label>
            <InputMask
              id="phone"
              className="w-full p-2 border border-[#015e94]  rounded bg-[#fff] text-[#0f5d9d] "
              mask="(999) 999-9999"
              placeholder="(000) 000-0000"
              {...register("phoneNumber", {
                pattern: {
                  value: /^\(\d{3}\) \d{3}-\d{4}$/,
                  message: "Invalid phone number format",
                },
              })}
            ></InputMask>
            {errors.phoneNumber && (
              <p className="text-red-500 text-[11px] mt-[6px] ml-[2px]">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div className="mb-4 w-[50%]">
            <label
              className="block text-[#015e97] font-bold mb-2"
              htmlFor="workNumber"
            >
              Work Number
            </label>
            <InputMask
              id="workNumber"
              className="w-full p-2 border border-[#015e94]  rounded bg-[#fff] text-[#0f5d9d] "
              mask="(999) 999-9999"
              placeholder="(000) 000-0000"
              {...register("workNumber", {
                pattern: {
                  value: /^\(\d{3}\) \d{3}-\d{4}$/,
                  message: "Invalid work number format",
                },
              })}
            ></InputMask>
            {errors.workNumber && (
              <p className="text-red-500 text-sm">
                {errors.workNumber.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-[30px]">
          <div className="mb-4 w-[50%]">
            <label
              className="block text-[#015e97] font-bold mb-2"
              htmlFor="company"
            >
              Company
            </label>
            <input
              className="w-full p-2 border border-[#015e94] rounded bg-[#fff] text-[#0f5d9d]"
              type="text"
              id="company"
              placeholder="Company"
              {...register("company", {
                required: "Company is required",
              })}
            />
          </div>

          <div className="mb-4 w-[50%]">
            <label
              className="block text-blue-900 font-bold mb-2"
              htmlFor="courses"
            >
              Courses
            </label>
            <select
              id="courses"
              className=" w-full p-2 border border-[#015e94] rounded bg-[#fff] text-[#0f5d9d]"
              {...register("courses", {
                required: "Course selection is required",
              })}
            >
              <option value="">Please Select</option>
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
              <option value="course3">Course 3</option>
            </select>
            {errors.courses && (
              <p className="text-red-500 text-sm">{errors.courses.message}</p>
            )}
          </div>
        </div>

        <div className="mb-6 ">
          <label
            className="block text-[#015e97] font-bold mb-2"
            htmlFor="additionalComments"
          >
            Additional Comments
          </label>
          <textarea
            id="additionalComments"
            className="w-full p-2 border border-[#015e94]  rounded bg-[#fff] text-[#0f5d9d] "
            placeholder="Additional Comments"
            {...register("additionalComments")}
          />
        </div>

        <div className="flex justify-center border-t border-t-[#005875] pt-[30px]">
          <button
            className=" py-[10px] px-[60px] hover:bg-[#fff] hover:text-[#005875] border-[#005875] border  bg-[#005875] text-white p-2 rounded-md font-bold"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;

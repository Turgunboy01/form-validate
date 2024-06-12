// src/StudentForm.js
import React from "react";
import { useForm } from "react-hook-form";

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
    <div className="  p-8 bg-blue-50 rounded-md ">
      <h1 className="text-2xl font-bold text-center text-blue-900 mb-4">
        Registration Form
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Fill out the form carefully for registration
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block text-blue-900 font-bold mb-2"
            htmlFor="firstName"
          >
            Student Name
          </label>
          <div className="flex space-x-4">
            <input
              className="w-1/3 p-2 border border-gray-300 rounded"
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: "First Name is required" })}
            />
            <input
              className="w-1/3 p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Middle Name"
              {...register("middleName")}
            />
            <input
              className="w-1/3 p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: "Last Name is required" })}
            />
          </div>
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-blue-900 font-bold mb-2"
            htmlFor="birthDate"
          >
            Birth Date
          </label>
          <div className="flex space-x-4">
            <select
              className="w-1/3 p-2 border border-gray-300 rounded"
              {...register("birthMonth", { required: "Month is required" })}
            >
              <option value="">Please</option>
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select
              className="w-1/3 p-2 border border-gray-300 rounded"
              {...register("birthDay", { required: "Day is required" })}
            >
              <option value="">Please</option>
              {days.map((day, index) => (
                <option key={index} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <select
              className="w-1/3 p-2 border border-gray-300 rounded"
              {...register("birthYear", { required: "Year is required" })}
            >
              <option value="">Please</option>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          {errors.birthMonth && (
            <p className="text-red-500 text-sm">{errors.birthMonth.message}</p>
          )}
          {errors.birthDay && (
            <p className="text-red-500 text-sm">{errors.birthDay.message}</p>
          )}
          {errors.birthYear && (
            <p className="text-red-500 text-sm">{errors.birthYear.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-blue-900 font-bold mb-2"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            {...register("gender", { required: "Gender is required" })}
          >
            <option value="">Please Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-blue-900 font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            type="text"
            placeholder="Street Address"
            {...register("address", { required: "Street Address is required" })}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            type="text"
            placeholder="Street Address Line 2"
            {...register("addressLine2")}
          />
          <div className="flex space-x-4 mb-2">
            <input
              className="w-1/2 p-2 border border-gray-300 rounded"
              type="text"
              placeholder="City"
              {...register("city", { required: "City is required" })}
            />
            <input
              className="w-1/2 p-2 border border-gray-300 rounded"
              type="text"
              placeholder="State / Province"
              {...register("state", { required: "State is required" })}
            />
          </div>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Postal / Zip Code"
            {...register("postalCode", {
              required: "Postal / Zip Code is required",
            })}
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
          {errors.state && (
            <p className="text-red-500 text-sm">{errors.state.message}</p>
          )}
          {errors.postalCode && (
            <p className="text-red-500 text-sm">{errors.postalCode.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-blue-900 font-bold mb-2" htmlFor="email">
            Student E-mail
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="email"
            placeholder="ex: myname@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-blue-900 font-bold mb-2"
            htmlFor="mobileNumber"
          >
            Mobile Number
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="tel"
            placeholder="(000) 000-0000"
            {...register("mobileNumber", {
              required: "Mobile Number is required",
              pattern: {
                value: /^\(\d{3}\) \d{3}-\d{4}$/,
                message: "Invalid mobile number format",
              },
            })}
          />
          {errors.mobileNumber && (
            <p className="text-red-500 text-sm">
              {errors.mobileNumber.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-blue-900 font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="tel"
            placeholder="(000) 000-0000"
            {...register("phoneNumber", {
              pattern: {
                value: /^\(\d{3}\) \d{3}-\d{4}$/,
                message: "Invalid phone number format",
              },
            })}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-blue-900 font-bold mb-2"
            htmlFor="workNumber"
          >
            Work Number
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="tel"
            placeholder="(000) 000-0000"
            {...register("workNumber", {
              pattern: {
                value: /^\(\d{3}\) \d{3}-\d{4}$/,
                message: "Invalid work number format",
              },
            })}
          />
          {errors.workNumber && (
            <p className="text-red-500 text-sm">{errors.workNumber.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-blue-900 font-bold mb-2"
            htmlFor="company"
          >
            Company
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Company"
            {...register("company")}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-blue-900 font-bold mb-2"
            htmlFor="courses"
          >
            Courses
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded"
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

        <div className="mb-4">
          <label
            className="block text-blue-900 font-bold mb-2"
            htmlFor="additionalComments"
          >
            Additional Comments
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Additional Comments"
            {...register("additionalComments")}
          />
        </div>

        <button
          className="w-full bg-blue-900 text-white p-2 rounded-md font-bold"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;

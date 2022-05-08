import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { HOROSCOPE_SIGNS } from "../staticData/horoscopeSigns";
import { DAY } from "../staticData/day";
import { Controller } from "react-hook-form";
import { classNames } from "primereact/utils";
const HoroScopeForm = ({
  getFormErrorMessage,
  handleSubmit,
  onSubmit,
  control,
}) => {
  return (
    <div className="w-full">
      <Card className="p-4 py-0  shadow-none ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-900 text-5xl font-medium font-bold mb-3">
            Horoscope
          </p>

          <div className=" formgrid grid">
            <div className="field col-12">
              <div className="flex flex-column mb-3">
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Name is required." }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      {...field}
                      autoFocus
                      placeholder="Name"
                      className={classNames({ "p-invalid": fieldState.error })}
                    />
                  )}
                />
                {getFormErrorMessage("name")}
              </div>
            </div>

            <div className="field col-12">
              <div className="flex flex-column mb-3">
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address.",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      {...field}
                      placeholder="Email"
                      className={classNames({
                        "p-invalid": fieldState.error,
                      })}
                    />
                  )}
                />
                {getFormErrorMessage("email")}
              </div>
            </div>
            <div className="field col-12 md:col-6">
              <Controller
                control={control}
                name="day"
                render={({ field }) => (
                  <Dropdown
                    {...field}
                    id={field.name}
                    className="mb-3  w-full"
                    options={DAY}
                    onChange={(e) => field.onChange(e.value)}
                    placeholder="Select A Day"
                  />
                )}
              />
            </div>
            <div className="field col-12 md:col-6">
              <div className="flex flex-column mb-3">
                <Controller
                  control={control}
                  name="sign"
                  rules={{
                    required: "Sign is required.",
                  }}
                  render={({ field, fieldState }) => (
                    <Dropdown
                      {...field}
                      id={field.name}
                      className={classNames({
                        "p-invalid": fieldState.error,
                      })}
                      onChange={(e) => field.onChange(e.value)}
                      options={HOROSCOPE_SIGNS}
                      placeholder="Select Your Sign"
                    />
                  )}
                />
                {getFormErrorMessage("sign")}
              </div>
            </div>
          </div>

          <Button label="Submit" type="submit" className="w-full " />
        </form>
      </Card>
    </div>
  );
};

export default HoroScopeForm;

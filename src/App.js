import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import HoroScopeForm from "./components/HoroScopeForm";
import HoroscopeResult from "./components/HoroscopeResult";
import { fetchData } from "./utils/fetchData";
import { isDateWithinRange } from "./utils/IsDateWithinRange";
import { ProgressSpinner } from "primereact/progressspinner";
function App() {
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (formData) => {
    setIsLoading(true);

    const { name, email, sign, day } = formData;
    const horoscopeData = await fetchData(sign, day);

    const isDateInRange = isDateWithinRange(horoscopeData);
    sessionStorage.setItem(
      "data",
      JSON.stringify({
        ...horoscopeData,
        isDateInRange,
        name,
        email,
        sign,
        day,
      })
    );
    setResult(JSON.parse(sessionStorage.getItem("data")));
    reset();
    setIsLoading(false);
  };

  const defaultValues = {
    name: "",
    email: "",
    sign: "",
    day: "today",
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    );
  };

  useEffect(() => {
    setResult(JSON.parse(sessionStorage.getItem("data")));
  }, []);
  return (
    <div className="flex align-items-center md:h-screen justify-content-center">
      <div className="flex  align-items-center justify-content-center flex-column md:flex-row">
        <HoroScopeForm
          getFormErrorMessage={getFormErrorMessage}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          control={control}
        />
        {isLoading ? (
          <div className="flex-1 flex align-items-center justify-content-center">
            <ProgressSpinner
              style={{ width: "50px", height: "50px" }}
              strokeWidth="8"
              fill="var(--surface-ground)"
              animationDuration=".5s"
            />
          </div>
        ) : (
          <HoroscopeResult result={result} />
        )}
      </div>
    </div>
  );
}

export default App;

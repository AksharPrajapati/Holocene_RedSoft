import React from "react";
import { useForm } from "react-hook-form";
import Select from "../common/Select";
import Button from "../common/Button";

type IHScodeRecommendations = {
  notAllowed?: boolean;
};

const HScodeRecommendations: React.FC<IHScodeRecommendations> = ({
  notAllowed = false,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      hsCodes: "",
    },
  });
  return (
    <div
      className={
        notAllowed
          ? "bg-red-50 p-4 rounded-md border border-red-200 border-solid"
          : "bg-orange-50 px-4 pb-4 rounded-md border border-orange-200 border-solid"
      }
    >
      {notAllowed ? (
        <div className="text-red-500 text-sm leading-5 font-medium">
          Please choose the Destination and Origin countries for
          recommendations.
        </div>
      ) : (
        <div className="flex items-end">
          <div className="w-80 -mt-1">
            <Select
              label="Please choose HS Codes to see recommendations:"
              name="hsCodes"
              register={register("hsCodes")}
              options={[
                {
                  value: "Product Name - 8450.2345",
                  text: "Product Name - 8450.2345",
                },
                { value: "2", text: "2" },
              ]}
            />
          </div>
          <div className="mt-3 ml-3">
            <Button>Update Recommendations</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HScodeRecommendations;

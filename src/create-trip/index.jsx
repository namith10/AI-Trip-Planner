import React, { useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { selectBudgetOptions } from "@/constants/options";
import { SelectTravelesList } from "@/constants/options";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { AI_PROMPT } from "@/constants/options";
import { chatSession } from "@/service/AIModel";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formdata, setFormData] = useState([]);
  const handleInputChange = (name, value) => {
    setFormData({ ...formdata, [name]: value });
  };
  useEffect(() => {
    console.log(formdata);
  }, [formdata]);

  const generatetrip = async () => {
    if (
      !formdata?.budget ||
      !formdata?.traveler ||
      !formdata?.noofDays > 7 ||
      !formdata?.location
    ) {
      toast("Please fill all the details");
    }
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      formdata?.location?.label
    )
      .replace("{totaldays}", formdata?.noofDays)
      .replace("{traveler}", formdata?.traveler)
      .replace("{budget}", formdata?.budget)
      .replace("{budget}", formdata?.budget)
      .replace("{totaldays}", formdata?.noofDays);

    console.log(FINAL_PROMPT);
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text());
  };
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10 mx-56">
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences🏝️🌍
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customised itinerary based on your preferences
      </p>
      <div>
        <div className="mt-20">
          <h2 className="text-xl my-3 font-medium">
            Where is your Destination?📍
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          ></GooglePlacesAutocomplete>
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip?📅
          </h2>
          <Input
            placeholder={"Ex-3"}
            onChange={(e) => handleInputChange("noofDays", e.target.value)}
            type="number"
          ></Input>
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">What is your budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {selectBudgetOptions.map((item, index) => (
              <div
                onClick={(e) => handleInputChange("budget", item.title)}
                key={index}
                className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg ${
                  formdata?.budget == item.title && "shadow-lg border-black"
                }`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-xl my-3 font-medium">
              Who do your plan to travel with?
            </h2>
            <div className="grid grid-cols-4 gap-5 mt-5">
              {SelectTravelesList.map((item, index) => (
                <div
                  onClick={(e) => handleInputChange("traveler", item.people)}
                  key={index}
                  className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg ${
                    formdata?.traveler == item.people &&
                    "shadow-lg border-black"
                  }`}
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="my-10 justify-end flex">
          <Button onClick={generatetrip}>Generate Trip</Button>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;

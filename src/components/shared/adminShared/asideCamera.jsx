import { cn } from "@/lib/utils";
import { Switch } from "@/src/components/ui/switch";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { useState } from "react";
import Table from "@/src/components/shared/table-admin"
export const AsideAdminCamera = () => {
  const country = [
    { id: 1, name: "Россия" },
    { id: 2, name: "США" },
    { id: 3, name: "Украина" },
    { id: 4, name: "Испания" },
    { id: 5, name: "Италия" },
    { id: 6, name: "Франция" },
    { id: 7, name: "Германия" },
    { id: 8, name: "Австралия" },
    { id: 9, name: "Нидерланды" },
    { id: 10, name: "Чехия" },
    { id: 11, name: "Польша" },
    { id: 12, name: "Германия" },
  ];
  const citiesByCountry = {
    Россия: ["Москва", "Питер", "Казань"],
    США: ["Нью-Йорк", "Лос-Анджелес", "Майами"],
    Украина: ["Киев", "Львов", "Одесса"],
    Испания: ["Мадрид", "Барселона"],
    Италия: ["Рим", "Милан"],
    Франция: ["Париж", "Лион"],
    Германия: ["Берлин", "Мюнхен"],
    Австралия: ["Сидней", "Мельбурн"],
    Нидерланды: ["Амстердам", "Роттердам"],
    Чехия: ["Прага", "Брно"],
    Польша: ["Варшава", "Краков"],
  };


  const [selectedCountry, setSelectedCountry] = useState("");
  const [, setSelectedCity] = useState("");

  return (
    <div
      className={cn(
        "w-100 bg-[#E3E3E3] dark:bg-[#0F1827] px-4 py-4 gap-5 flex flex-col"
      )}
    >
      {/*First block*/}
      <div className="w-full flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Switch className="cursor-pointer" id="switch" />
            <Label htmlFor="switch" className="cursor-pointer">
              Режим архива
            </Label>
          </div>
          <Button className="cursor-pointer dark:bg-[#070F19] dark:text-white">
            Очистить
          </Button>
        </div>
        <Input className="bg-white" placeholder="Поиск камер" />
      </div>
      {/*Second block*/}
      <div className="flex flex-col gap-5">
        <h4 className="text-[15px] font-bold">Параметры поиска</h4>
        {/*inputs*/}
        <div className="flex flex-col gap-7">
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="one">Тип подрозделения</Label>
            <Select>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Выбрать тип подрозделдение" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="two">Страна</Label>
            <Select
              onValueChange={(value) => {
                setSelectedCountry(value);
                setSelectedCity("");
              }}
            >
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Выбрать страны" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {country.map((item) => (
                    <SelectItem key={item.id} value={item.name}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="four">Город</Label>
            <Select disabled={!selectedCountry} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Выбрать город" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {(citiesByCountry[selectedCountry] || []).map(
                    (city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ),
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      {/*Third block*/}
      <div className="admin-table">
        <h4 className="text-[15px] font-bold">Найденно камер 0</h4>
        <Table/>
      </div>
    </div>
  );
};

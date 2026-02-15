"use client";
import { Switch } from "@/src/components/ui/switch";
import { Input } from "@/src/components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import Table from "@/src/components/shared/table-admin"
import Image from "next/image";
import { useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
export default function Admin() {
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const onSelectImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImage(url);
  };
  return (
    <div className="flex justify-between admin pl-26 gap-7">
      <div className="w-full h-full py-5 flex flex-col gap-4">
        <div className="flex justify-between w-full">
          <div>
            <button onClick={onButtonClick} className="rounded-md bg-[#3060FE] w-[195px] h-[45px] hover:bg-[#3060FE] cursor-pointer text-white">Добавить карту</button>

            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={onSelectImage}
            />
          </div>
          <Button className="bg-[#3060FE] w-[195px] h-[45px] hover:bg-[#3060FE] cursor-pointer text-white">
            Добавит камеру на карту
          </Button>
        </div>
        <div className="bg-[#E3E3E3] w-full admin-photo-add rounded-md dark:bg-[#0F1827]">
          {image && (
            <Image
              src={image}
              alt="preview"
              width={10}
              height={10}
              className="w-full h-full"
            />
          )}
        </div>
      </div>
      <div className="w-100 h-full bg-[#E3E3E3] dark:bg-[#0F1827] px-4 py-4 gap-5 flex flex-col">
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
              <Label htmlFor="onVBNCVBNe">Тип подрозделения</Label>
              <Select>
                <SelectTrigger className="w-full bg-white cursor-pointer">
                  <SelectValue placeholder="<нет>" />
                </SelectTrigger>
                <SelectContent id="onVBNCVBNe">
                  <SelectItem value="asd" className="cursor-pointer">
                    &lt;нет&gt;
                  </SelectItem>
                  <SelectItem value="vvv" className="cursor-pointer">
                    Запись по движению
                  </SelectItem>
                  <SelectItem value="nnn" className="cursor-pointer">
                    Запись по требыванию
                  </SelectItem>
                  <SelectItem value="zzz" className="cursor-pointer">
                    Постоянная запись
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        {/*Third block*/}
        <div className="admin-table-two">
          <h4 className="text-[15px] font-bold">Найденно камер 0</h4>
          <Table />
        </div>
      </div>
    </div>
  );
}

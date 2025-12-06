"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Switch } from "@/src/components/ui/switch";
import { Input } from "@/src/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

export default function Admin() {
  const invoices = [
    {
      active: true,
      invoice: "Camera 1",
      ip: "192.168.1.1",
      totalAmount: "copy",
    },
    {
      active: false,
      invoice: "Camera 2",
      ip: "none",
      totalAmount: "copy",
    },
  ];
  return (
    <div className="flex justify-between h-full pl-26 gap-7">
      <div className="w-full h-full py-5 flex flex-col gap-4">
        <div className="flex justify-between w-full">
          <div className="relative cursor-pointer">
            <Input
              id="picture"
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer -z-10"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) console.log("Выбрано:", file.name);
              }}
            />

            <Button
              variant="default"
              className="w-[135px] h-[45px] bg-[#3060FE] hover:bg-[#254ed8] text-white flex items-center justify-center gap-2"
              asChild
            >
              <label htmlFor="picture" className="cursor-pointer">
                Добавить фото
              </label>
            </Button>
          </div>
          <Button className="bg-[#3060FE] w-[195px] h-[45px] hover:bg-[#3060FE] cursor-pointer text-white">
            Добавит камеру на карту
          </Button>
        </div>
        <div className="bg-[#E3E3E3] w-full h-full rounded-md dark:bg-[#0F1827]"></div>
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
        <div className="flex flex-col max-h-[570px] overflow-auto">
          <h4 className="text-[15px] font-bold">Найденно камер 0</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Камеры</TableHead>
                <TableHead>IP Адрес</TableHead>
                <TableHead></TableHead>
                <TableHead className="text-right">Действие</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium flex items-center gap-1">
                    <span
                      className={cn(
                        "inline-block w-2 h-2 rounded-full",
                        invoice.active ? "bg-green-500" : "bg-red-500",
                      )}
                    />
                    {invoice.invoice}
                  </TableCell>
                  <TableCell className="text-center">{invoice.ip}</TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-center cursor-pointer">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

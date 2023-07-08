"use client";
import Avatar from "react-avatar";
import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import SearchButton from "./SearchButton";
import {
  SearchSelect,
  SearchSelectItem,
  Select,
  SelectItem,
} from "@tremor/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SORT_BY_MAP = {
  r: "Default",
  rv: "By Review",
  p: "By Price (low to high)",
  pd: "By Price (high to low)",
};

const Header = () => {
  const [pages, setPages] = useState("");
  const [sortBy, setsortBy] = useState("");
  const [minPrice, setminPrice] = useState("");
  const [maxPrice, setmaxPrice] = useState("");

  const router = useRouter();

  return (
    <header className="flex flex-col items-center px-2 pt-10 pb-5 md:flex-row md:items-start md:space-x-6 md:p-10 md:pb-5">
      <Link href={"/"}>
        <Image
          src={"https://links.papareact.com/208"}
          height={150}
          width={150}
          alt="logo"
          className="object-contain mr-10"
        />
      </Link>

      <div className="w-full md:max-w-2xl">
        {/*form*/}
        <form action="">
          <div className="flex items-center w-full gap-2">
            <div className="flex items-center flex-1 px-6 py-4 space-x-2 bg-white border-0 rounded-full shadow-xl md:max-w-5xl">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                name="searchTerm"
                placeholder="Search..."
                className="flex-1 outline-none"
              />
            </div>

            {/*Search button */}

            <SearchButton />
          </div>



          {/*Select our pages*/}



          <div className="grid items-center max-w-lg grid-cols-2 gap-2 p-4 mx-auto md:grid-cols-4 md:max-w-none">
            <SearchSelect
              onValueChange={(value) => setPages(value)}
              className="min-w-4"
              placeholder="# of pages"
            >
              {[...Array(100)].map((_, i) => (
                <SearchSelectItem key={i} value={(i + 1).toString()}>
                  {(i + 1).toString()} pages
                </SearchSelectItem>
              ))}
            </SearchSelect>

            <Select
            onValueChange={(value) => setsortBy(value)}
            className="min-w-4" placeholder="Sort by">
              {Object.entries(SORT_BY_MAP).map(([key, value]) => (
                <SelectItem key={key} value={value}>
                  {value}
                </SelectItem>
              ))}
            </Select>

            <SearchSelect
            onValueChange={(value) => setminPrice(value)}
            placeholder="Min Price..." className="min-w-4">
              {["", "100", "250", "500", "750", "900", "1000+"].map((_, i) => (
                <SearchSelectItem key={i} value={_.toString()}>
                  {i === 0 ? "No Minimun" : `$${_.toString()}`}
                </SearchSelectItem>
              ))}
            </SearchSelect>

            <SearchSelect
            onValueChange={(value) => setmaxPrice(value)}
            className="min-w-4 " placeholder="Max Price...">
              {["", "100", "250", "500", "750", "900", "1000+"].map((_, i) => (
                <SearchSelectItem key={i} value={_.toString()}>
                  {i === 0 ? "No Maximun" : `$${_.toString()}`}
                </SearchSelectItem>
              ))}
            </SearchSelect>
          </div>
        </form>
      </div>

      <div className="justify-end flex-1 hidden lg:flex">
        <Avatar name="sponge bob" round size="50" />
      </div>
    </header>
  );
};

export default Header;

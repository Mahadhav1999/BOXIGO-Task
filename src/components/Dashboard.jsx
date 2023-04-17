import React, { useState, useEffect } from "react";
import { GiPathDistance } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { BsBuildingsFill, BsFillCalendar2CheckFill } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";
import { Button } from "primereact/button";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Badge } from "primereact/badge";
import { Checkbox } from "primereact/checkbox";

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [displayToggle, setDisplayToggle] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [checked, setChecked] = useState(true);

  const Url = "http://test.api.boxigo.in/sample-data/";

  const fetchItems = async () => {
    let res = await fetch(Url);
    let data = await res.json();
    let itemsData = data.Customer_Estimate_Flow;
    console.log(itemsData);
    setItems(itemsData);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <div className="block-content">
        <div className="min-h-screen flex relative lg:static">
          <div
            id="app-sidebar-9"
            className="h-full lg:h-auto surface-section lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-18rem lg:w-7rem select-none hidden"
          >
            <div className="flex flex-column h-full">
              <div className="mt-3">
                <ul className="list-none p-0 m-0">
                  <li>
                    <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-red-500 border-left-2 border-red-500 hover:border-300 transition-duration-150 transition-colors">
                      <i className="pi pi-truck mr-2 lg:mr-0 mb-0 lg:mb-2 text-base text-2xl"></i>
                      <span className="font-medium inline text-base lg:text-xs lg:block">
                        My Moves
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors">
                      <i className="pi pi-user mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                      <span className="font-medium inline text-base lg:text-xs lg:block">
                        My Profile
                      </span>
                      <span
                        role="presentation"
                        className="p-ink"
                        style={{
                          height: "111.333px",
                          width: "111.333px",
                          top: "38.3645px",
                          left: "44.3333px",
                        }}
                      ></span>
                    </a>
                  </li>
                  <li>
                    <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors">
                      <i className="pi pi-book mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                      <span className="font-medium inline text-base lg:text-xs lg:block">
                        Get Quote
                      </span>
                      <span role="presentation" className="p-ink"></span>
                    </a>
                  </li>

                  <li>
                    <a className="p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors">
                      <i className="pi pi-power-off mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                      <span className="font-medium inline text-base lg:text-xs lg:block">
                        Logout
                      </span>
                      <span
                        role="presentation"
                        className="p-ink"
                        style={{
                          height: "111.333px",
                          width: "111.333px",
                          top: "-11.1355px",
                          left: "7.83333px",
                        }}
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="block-content">
              <div>
                <section
                  className="flex flex-column align-items-start gap-6 px-2 py-4 md:px-2 lg:px-2"
                  style={{ width: "100%" }}
                >
                  <header className="flex justify-content-start flex-column gap-2">
                    <h3 className="m-0 font-bold text-1xl line-height-3 text-900 py-5">
                      My Moves
                    </h3>
                  </header>
                  <div className="flex flex-column justify-content-center gap-5">
                    {items.map((item, index) => (
                      <>
                        <div
                          key={index}
                          className="flex flex-column gap-4 p-5 border-round-lg shadow-3 mt-1"
                        >
                          <div key={index} className="flex justify-content-between align-items-center border-bottom-1 surface-border pb-4 gap-5">
                            <div className="flex flex-column gap-2">
                              <h3 className="m-0 font-semibold text-xl text-900">
                                From
                              </h3>
                              <p className="mt-2 mb-0 text-base text-600 w-25">
                                {item.moving_from}
                              </p>
                            </div>
                            <div className="flex flex-column gap-4 border-circle p-3 shadow-1">
                              <i className="pi pi-arrow-right text-red-500"></i>
                            </div>
                            <div className="flex flex-column gap-2">
                              <h3 className="m-0 font-semibold text-xl text-900">
                                To
                              </h3>
                              <p className="mt-2 mb-0 text-base text-600">
                                {item.moving_to}
                              </p>
                            </div>
                            <div className="flex flex-column gap-2">
                              <h3 className="m-0 font-semibold text-xl text-900">
                                Request#
                              </h3>
                              <h3 className="text-red-500">{item.estimate_id}</h3>
                            </div>
                          </div>

                          <div className="grid">
                            <div className="col" style={{ flexBasis: "auto" }}>
                              <AiFillHome className="text-xl text-red-500" />
                              <span className="mx-2 mb-0 text-base text-600">
                                {item.property_size}
                              </span>
                            </div>
                            <div className="col" style={{ flexBasis: "auto" }}>
                              <BsBuildingsFill className="text-xl text-red-500" />
                              <span className="mx-2 mb-0 text-base text-600">
                                {item.old_floor_no}
                              </span>
                            </div>
                            <div className="col" style={{ flexBasis: "auto" }}>
                              <GiPathDistance className="text-xl text-red-500" />
                              <span className="mx-2 mb-0 text-base text-600">
                                {item.distance}
                              </span>
                            </div>
                            <div className="col" style={{ flexBasis: "auto" }}>
                              <BsFillCalendar2CheckFill className="text-xl text-red-500" />
                              <span className="mx-2 mb-0 text-base text-600">
                                {item.moving_on}
                              </span>

                              <TiPencil className="text-xl mx-4" />
                            </div>

                            <div class="field-checkbox">
                              <Checkbox
                                checked={checked}
                                onChange={(e) => setChecked(e.checked)}
                                class="bg-red-500 text-white border-round p-1"
                              />
                              <label htmlFor="binary">is Flexible</label>
                            </div>

                            <div className="col" style={{ flexBasis: "auto" }}>
                              <button
                                onClick={() => setDisplayToggle(!displayToggle)}
                                className="p-button p-button-outlined border-red-500 text-red-500 border-round-xs h-2rem"
                                style={{ padding: "1.2rem" }}
                              >
                                View More Details
                              </button>
                            </div>
                            <div className="col" style={{ flexBasis: "auto" }}>
                              <button
                                className="p-button bg-red-500 border-red-500 text-white border-round-xs h-2rem"
                                style={{ padding: "1.2rem" }}
                              >
                                Quotes Awaiting
                              </button>
                            </div>
                          </div>
                          <div className="flex justify-content-start gap-2">
                            <i className="pi pi-exclamation-triangle text-red-500" />
                            <strong>Disclaimer : </strong>
                            <span>
                              Please update your move date before two days of
                              shifting
                            </span>
                          </div>
                          {displayToggle && (
                            <>
                              <div className="flex flex-wrap justify-content-between">
                                <h3>Additional Information</h3>
                                <button className="p-button bg-black-alpha-80 border-black-alpha-80 h-full">
                                  Edit Additional Info
                                </button>
                              </div>
                              <p>Test Data</p>
                              <div className="flex flex-wrap justify-content-between">
                                <h3>House Details</h3>
                                <button className="p-button bg-black-alpha-80 border-black-alpha-80 h-full">
                                  Edit House Details
                                </button>
                              </div>

                              <div className="grid">
                                <div className="col-4">
                                  <h4 className="text-red-500">
                                    Existing House Details
                                  </h4>

                                  <h4>Floor No</h4>
                                  <p>{item.old_floor_no}</p>
                                </div>
                                <div className="col-4">
                                  <h4>Elevator Available</h4>
                                  <p>{item.old_elevator_availability}</p>
                                </div>
                                <div className="col-4">
                                  <h4>
                                    Distance From Elevator/Staircase to truck
                                  </h4>
                                  <p>{item.old_parking_distance}</p>
                                </div>
                              </div>
                              <div className="grid">
                                <div className="col-4">
                                  <h4 className="text-red-500">
                                    New House Details
                                  </h4>

                                  <h4>Floor No</h4>
                                  <p>{item.new_floor_no}</p>
                                </div>
                                <div className="col-4">
                                  <h4>Elevator Available</h4>
                                  <p>{item.new_elevator_availability}</p>
                                </div>
                                <div className="col-4">
                                  <h4>
                                    Distance From Elevator/Staircase to truck
                                  </h4>
                                  <p>{item.new_parking_distance}</p>
                                </div>
                              </div>
                              <div className="flex flex-wrap justify-content-between">
                                <h3>Inventory Deatils</h3>
                                <button className="p-button bg-black-alpha-80 border-black-alpha-80 h-full">
                                  Edit Inventory
                                </button>
                              </div>
                              <Accordion>
                                <AccordionTab
                                  header={
                                    item.items.inventory[0]["displayName"]
                                  }
                                >
                                  <Badge
                                    value={
                                      item.items.inventory[0].category[0]
                                        .items[0]["qty"]
                                    }
                                    severity="danger"
                                  ></Badge>

                                  <div className="flex md:px-6 lg:px-8">
                                    <div className="border-round p-4">
                                      <div className="flex justify-content-between align-items-center mb-5">
                                        <span className="text-xl text-900 font-bold">
                                          {
                                            item.items.inventory[0].category[0][
                                              "displayName"
                                            ]
                                          }
                                        </span>
                                      </div>
                                      <ul className="list-none p-0 m-0">
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-start mb-4">
                                          <div className="flex">
                                            <div className="mr-0 md:mr-8">
                                              <span className="block text-900 font-medium mb-1">
                                                {
                                                  item.items.inventory[0]
                                                    .category[0].items[0][
                                                    "displayName"
                                                  ]
                                                }
                                              </span>
                                              <div className="text-600">
                                                {
                                                  item.items.inventory[0]
                                                    .category[0].items[0]
                                                    .type[0]["option"]
                                                }
                                              </div>
                                            </div>
                                          </div>
                                          <div className="mt-2 md:mt-0 flex flex-nowrap">
                                            <span className="font-semibold">
                                              {
                                                item.items.inventory[0]
                                                  .category[0].items[0]["order"]
                                              }
                                            </span>
                                          </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-start mb-4">
                                          <div className="flex">
                                            <div className="mr-0 md:mr-8">
                                              <span className="block text-900 font-medium mb-1">
                                                {
                                                  item.items.inventory[0]
                                                    .category[0].items[1][
                                                    "displayName"
                                                  ]
                                                }
                                              </span>
                                              <div className="text-600">
                                                {
                                                  item.items.inventory[0]
                                                    .category[0].items[1]
                                                    .type[2]["option"]
                                                }
                                              </div>
                                            </div>
                                          </div>
                                          <div className="mt-2 md:mt-0 flex flex-nowrap">
                                            <span className="font-bold">
                                              {
                                                item.items.inventory[0]
                                                  .category[0].items[1]["order"]
                                              }
                                            </span>
                                          </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-start mb-4">
                                          <div className="flex">
                                            <div className="mr-0 md:mr-8">
                                              <span className="block text-900 font-medium mb-1">
                                                {
                                                  item.items.inventory[0]
                                                    .category[0].items[2][
                                                    "displayName"
                                                  ]
                                                }
                                              </span>
                                              <div className="text-600">
                                                {
                                                  item.items.inventory[0]
                                                    .category[0].items[1]
                                                    .type[1]["option"]
                                                }
                                              </div>
                                            </div>
                                          </div>
                                          <div className="mt-2 md:mt-0 flex flex-nowrap">
                                            <span className="font-bold">
                                              {
                                                item.items.inventory[0]
                                                  .category[0].items[2]["order"]
                                              }
                                            </span>
                                          </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-start mb-4">
                                          <div className="flex">
                                            <div className="mr-0 md:mr-8">
                                              <span className="block text-900 font-medium mb-1">
                                                {
                                                  item.items.inventory[0]
                                                    .category[0].items[3][
                                                    "displayName"
                                                  ]
                                                }
                                              </span>
                                            </div>
                                          </div>
                                          <div className="mt-2 md:mt-0 flex flex-nowrap">
                                            <span className="font-bold">
                                              {
                                                item.items.inventory[0]
                                                  .category[0].items[3]["order"]
                                              }
                                            </span>
                                          </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-start mb-4">
                                          <div className="flex">
                                            <div className="mr-0 md:mr-8">
                                              <span className="block text-900 font-medium mb-1">
                                                {
                                                  item.items.inventory[0]
                                                    .category[0].items[4][
                                                    "displayName"
                                                  ]
                                                }
                                              </span>
                                              <div className="text-600">
                                                {
                                                  item.items.inventory[0]
                                                    .category[0].items[4]
                                                    .type[2]["option"]
                                                }
                                              </div>
                                            </div>
                                          </div>
                                          <div className="mt-2 md:mt-0 flex flex-nowrap">
                                            <span className="font-bold">
                                              {
                                                item.items.inventory[0]
                                                  .category[0].items[4]["order"]
                                              }
                                            </span>
                                          </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-start mb-4">
                                          <div className="flex">
                                            <div className="mr-0 md:mr-8">
                                              <span className="block text-900 font-medium mb-1">
                                                {
                                                  item.items.inventory[0]
                                                    .category[0].items[5][
                                                    "displayName"
                                                  ]
                                                }
                                              </span>
                                            </div>
                                          </div>
                                          <div className="mt-2 md:mt-0 flex flex-nowrap">
                                            <span className="font-bold">
                                              {
                                                item.items.inventory[0]
                                                  .category[0].items[5]["order"]
                                              }
                                            </span>
                                          </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-start mb-4">
                                          <div className="flex">
                                            <div className="mr-0 md:mr-8">
                                              <span className="block text-900 font-medium mb-1">
                                                {
                                                  item.items.inventory[0]
                                                    .category[0].items[6][
                                                    "displayName"
                                                  ]
                                                }
                                              </span>
                                            </div>
                                          </div>
                                          <div className="mt-2 md:mt-0 flex flex-nowrap">
                                            <span className="font-bold">
                                              {
                                                item.items.inventory[0]
                                                  .category[0].items[6]["order"]
                                              }
                                            </span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="border-round p-4">
                                      <div className="flex justify-content-between align-items-center mb-5">
                                        <span className="text-xl text-900 font-bold">
                                          {
                                            item.items.inventory[0].category[1][
                                              "displayName"
                                            ]
                                          }
                                        </span>
                                      </div>
                                      <ul className="list-none p-0 m-0">
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-start mb-4">
                                          <div className="flex">
                                            <div className="mr-0 md:mr-8">
                                              <span className="block text-900 font-medium mb-1">
                                                {
                                                  item.items.inventory[0]
                                                    .category[1].items[0][
                                                    "displayName"
                                                  ]
                                                }
                                              </span>
                                              <div className="text-600">
                                                {
                                                  item.items.inventory[0]
                                                    .category[1].items[0]
                                                    .type[0]["option"]
                                                }
                                              </div>
                                            </div>
                                          </div>
                                          <div className="mt-2 md:mt-0 flex flex-nowrap">
                                            <span className="font-semibold">
                                              {
                                                item.items.inventory[0]
                                                  .category[1].items[0]["order"]
                                              }
                                            </span>
                                          </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-start mb-4">
                                          <div className="flex">
                                            <div className="mr-0 md:mr-8">
                                              <span className="block text-900 font-medium mb-1">
                                                {
                                                  item.items.inventory[0]
                                                    .category[1].items[1][
                                                    "displayName"
                                                  ]
                                                }
                                              </span>
                                              <div className="text-600">
                                                {
                                                  item.items.inventory[0]
                                                    .category[1].items[1]
                                                    .type[0]["option"]
                                                }
                                              </div>
                                            </div>
                                          </div>
                                          <div className="mt-2 md:mt-0 flex flex-nowrap">
                                            <span className="font-bold">
                                              {
                                                item.items.inventory[0]
                                                  .category[1].items[1]["order"]
                                              }
                                            </span>
                                          </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-start mb-4">
                                          <div className="flex">
                                            <div className="mr-0 md:mr-8">
                                              <span className="block text-900 font-medium mb-1">
                                                {
                                                  item.items.inventory[0]
                                                    .category[1].items[2][
                                                    "displayName"
                                                  ]
                                                }
                                              </span>
                                              <div className="text-600">
                                                {
                                                  item.items.inventory[0]
                                                    .category[1].items[2]
                                                    .type[0]["option"]
                                                }
                                              </div>
                                            </div>
                                          </div>
                                          <div className="mt-2 md:mt-0 flex flex-nowrap">
                                            <span className="font-bold">
                                              {
                                                item.items.inventory[0]
                                                  .category[1].items[2]["order"]
                                              }
                                            </span>
                                          </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-start mb-4">
                                          <div className="flex">
                                            <div className="mr-0 md:mr-8">
                                              <span className="block text-900 font-medium mb-1">
                                                {
                                                  item.items.inventory[0]
                                                    .category[1].items[5][
                                                    "displayName"
                                                  ]
                                                }
                                              </span>
                                              <div className="text-600">
                                                {
                                                  item.items.inventory[0]
                                                    .category[1].items[5]
                                                    .type[2]["option"]
                                                }
                                                ,
                                                {
                                                  item.items.inventory[0]
                                                    .category[1].items[5]
                                                    .type[2]["option"]
                                                }
                                              </div>
                                            </div>
                                          </div>
                                          <div className="mt-2 md:mt-0 flex flex-nowrap">
                                            <span className="font-bold ">
                                              {
                                                item.items.inventory[0]
                                                  .category[1].items[5]["order"]
                                              }
                                            </span>
                                          </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-start mb-4">
                                          <div className="flex">
                                            <div className="mr-0 md:mr-8">
                                              <span className="block text-900 font-medium mb-1">
                                                {
                                                  item.items.inventory[0]
                                                    .category[1].items[6][
                                                    "displayName"
                                                  ]
                                                }
                                              </span>
                                              <div className="text-600">
                                                {
                                                  item.items.inventory[0]
                                                    .category[1].items[6]
                                                    .type[0]["option"]
                                                }
                                                ,
                                                {
                                                  item.items.inventory[0]
                                                    .category[1].items[6]
                                                    .type[2]["option"]
                                                }
                                              </div>
                                            </div>
                                          </div>
                                          <div className="mt-2 md:mt-0 flex flex-nowrap">
                                            <span className="font-bold ">
                                              {
                                                item.items.inventory[0]
                                                  .category[1].items[6]["order"]
                                              }
                                            </span>
                                          </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-start mb-4">
                                          <div className="flex">
                                            <div className="mr-0 md:mr-8">
                                              <span className="block text-900 font-medium mb-1">
                                                {
                                                  item.items.inventory[0]
                                                    .category[1].items[8][
                                                    "displayName"
                                                  ]
                                                }
                                              </span>
                                            </div>
                                          </div>
                                          <div className="mt-2 md:mt-0 flex flex-nowrap">
                                            <span className="font-bold">
                                              {
                                                item.items.inventory[0]
                                                  .category[1].items[8]["order"]
                                              }
                                            </span>
                                          </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-start mb-4">
                                          <div className="flex">
                                            <div className="mr-0 md:mr-8">
                                              <span className="block text-900 font-medium mb-1">
                                                {
                                                  item.items.inventory[0]
                                                    .category[1].items[9][
                                                    "displayName"
                                                  ]
                                                }
                                              </span>
                                            </div>
                                          </div>
                                          <div className="mt-2 md:mt-0 flex flex-nowrap">
                                            <span className="font-bold">
                                              {
                                                item.items.inventory[0]
                                                  .category[1].items[9]["order"]
                                              }
                                            </span>
                                          </div>
                                        </li>

                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-start mb-4">
                                          <div className="flex">
                                            <div className="mr-0 md:mr-8">
                                              <span className="block text-900 font-medium mb-1">
                                                {
                                                  item.items.inventory[0]
                                                    .category[1].items[8][
                                                    "displayName"
                                                  ]
                                                }
                                              </span>
                                            </div>
                                          </div>
                                          <div className="mt-2 md:mt-0 flex flex-nowrap">
                                            <span className="font-bold">
                                              {
                                                item.items.inventory[0]
                                                  .category[1].items[8]["order"]
                                              }
                                            </span>
                                          </div>
                                        </li>
                                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-start mb-4">
                                          <div className="flex">
                                            <div className="mr-0 md:mr-8">
                                              <span className="block text-900 font-medium mb-1">
                                                {
                                                  item.items.inventory[0]
                                                    .category[1].items[10][
                                                    "displayName"
                                                  ]
                                                }
                                              </span>
                                            </div>
                                          </div>
                                          <div className="mt-2 md:mt-0 flex flex-nowrap">
                                            <span className="font-bold">
                                              {
                                                item.items.inventory[0]
                                                  .category[1].items[10][
                                                  "order"
                                                ]
                                              }
                                            </span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </AccordionTab>
                              </Accordion>
                            </>
                          )}
                        </div>
                      </>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

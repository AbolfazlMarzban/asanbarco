import React, { useEffect, useState } from "react";
import Link from "next/link";
import CargoBox from "@/components/cargoList/cargoBox";
import Dialog from "@/components/UI/dialog";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DialogBtn from "@/components/UI/dialogBtn";
import RadioBtn from "@/components/UI/radioBtn";
import DatePicker from "react-modern-calendar-datepicker";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import Textbox from "@/components/UI/textbox";
import CargoType from "@/components/newCargo/cargoType";
import Checkbox from "@/components/UI/checkbox";
import Inputbox from "@/components/UI/inputbox";
import WeightType from "@/components/newCargo/weightType";
import LoadingTime from "@/components/newCargo/loadingTime";
import Accordion from "@/components/UI/accardion";

function index() {
  const [display, setDisplay] = useState("cargo");
  const [confirm, setConfirm] = useState(false);
  const [cancelCargo, setCancelCargo] = useState(false);
  const [data, setData]: any = useState(null);
  const [cargoId, setCargoId]: any = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showCargo, setShowCargo] = useState(false);
  const [feeType, setFeeType] = useState("");
  const [showWeight, setShowWeight] = useState(false);
  const [showLoadingTime, setShowLoadingTime] = useState(false);
  const [showDischargeTime, setShowDischargeTime] = useState(false);
  const [phone, setPhone] = useState('');
  const [loadingDate, setLoadingDate] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [comment, setComment] = useState("");
  const [cargoType, setCargoType] = useState("");
  const [weight, setWeight] = useState("");
  const [loadingTime, setLoadingTime] = useState("");
  const [dischargeTime, setDischargeTime] = useState("");
  const router = useRouter();
  useEffect(() => {
    let id;
    var query = router.query.id;
    if (query) {
      id = query[0];
      setCargoId(id);
    }
    if (id) {
      (async () => {
        const result = await axios.get(`/api/cargoDetail?id=${id}`);
        console.log("data", result.data);
        setData(result.data);
      })();
    }
  }, []);
  async function deleteCargo() {
    try {
      if (cargoId) {
        const result = await axios.post(`/api/cargoDetail?id=${cargoId}`);
        if (result) {
          toast("بار شما با موفقیت از سامانه حذف شد!");
          router.push("/myCargo");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="bg-[#f1f5f8] h-screen">
      <div className="bg-myblue text-white py-5 px-2 flex justify-between">
        <div className="flex gap-4">
          <Link href={"/myCargo"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
          <h2>بار</h2>
        </div>
      </div>
      <div className="bg-white flex gap-5 p-4 m-4">
        <button
          onClick={() => setDisplay("cargo")}
          className={`${
            display == "cargo" ? `bg-myblue text-white` : `bg-white text-myblue`
          } p-2 w-1/2 rounded-md`}
        >
          مشخصات بار
        </button>
        <button
          onClick={() => setDisplay("reqs")}
          className={`${
            display == "reqs" ? `bg-myblue text-white` : `bg-white text-myblue`
          } p-2 w-1/2 rounded-md`}
        >
          درخواست ها
        </button>
      </div>
      {display == "cargo" ? (
        <>
          {data && (
            <>
              <div className="mx-4">
                <CargoBox data={data}></CargoBox>
              </div>
              <div>
                <div className=" mx-4 bg-white border-[1px] rounded-md  ">
                  <div className="small_details grid grid-cols-2 justify-items-stretch ">
                    <div className="border-b-[1px] border-l-[1px] border-slate-100  px-2 py-3">
                      <h3 className="text-gray-400 text-sm">شماره بار</h3>
                      {data._id}
                    </div>
                    <div className="border-b-[1px]  border-slate-100 px-2 py-3 ">
                      <h3 className="text-gray-400 text-sm pb-2">مسافت کل</h3>
                      95 کیلومتر
                    </div>
                    <div className="border-b-[1px] border-l-[1px] border-slate-100 px-2 py-3 ">
                      <h3 className="text-gray-400 text-sm pb-2">بارگیری</h3>
                      {data.loadingDate[0]}
                    </div>
                    <div className="border-b-[1px]  border-slate-100  px-2 py-3">
                      <h3 className="text-gray-400 text-sm pb-2">ناوگان</h3>
                      {data.carrier.map((item: any, i: any) => (
                        <>
                          {item.parent},{item.child} |
                        </>
                      ))}
                    </div>
                    <div className="border-b-[1px] border-l-[1px] border-slate-100 px-2 py-3 ">
                      <h3 className="text-gray-400 text-sm ">نوع بار</h3>
                      {data.cargoType}
                    </div>
                    <div className="border-b-[1px]  border-slate-100  px-2 py-3">
                      <h3 className="text-gray-400 text-sm ">وزن</h3>
                      {data.weightType}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-5 align-center bg-[#f1f5f8] p-4">
                <button
                  className="flex gap-2 px-3 py-2 bg-myblue text-white rounded-xl mx-2 w-1/2 justify-center"
                  onClick={() => setShowEdit(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>

                  <span>ویرایش بار</span>
                </button>
                <button
                  className="flex gap-2 px-3 py-2 bg-slate-400 text-black rounded-xl mx-2 w-1/2 justify-center"
                  onClick={() => setCancelCargo(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>

                  <span>لغو بار</span>
                </button>
              </div>
            </>
          )}
          {cancelCargo && (
            <Dialog title={"لغو بار"} close={() => setCancelCargo(false)}>
              <div className="flex flex-col px-3 py-2">
                <span>آیا برای لغو بار مطمئن هستید؟</span>
                <div className="flex gap-3 mx-3 my-2">
                  <button
                    className="bg-slate-300 rounded-md w-1/2 p-3"
                    onClick={() => setCancelCargo(false)}
                  >
                    خیر
                  </button>
                  <button
                    className="bg-myblue text-white rounded-md w-1/2 p-3"
                    onClick={() => deleteCargo()}
                  >
                    بله
                  </button>
                </div>
              </div>
            </Dialog>
          )}
           {showEdit && (
            <Dialog title={"ویرایش بار"} close={() => setShowEdit(false)}>
              <>
                <div className="flex flex-col items-center bg-[#f1f5f8] justify-start p-2">
                  <div className="w-96">
                    <DialogBtn
                      title={"مبدأ"}
                      open={()=>toast('قابل ویرایش نیست')}
                      close={()=>toast('قابل ویرایش نیست')}
                      value={data.origin}
                      firstIcon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-myblue"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                      }
                      secondIcon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      }
                    ></DialogBtn>
                    <DialogBtn
                      title={"مقصد"}
                      open={()=>toast('قابل ویرایش نیست')}
                      close={()=>toast('قابل ویرایش نیست')}
                      value={data.desination}
                      firstIcon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-myblue"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                      }
                      secondIcon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          />
                        </svg>
                      }
                    ></DialogBtn>
                    <Checkbox
                      title={"صدور بارنامه از طرف آسان بار"}
                      value={data.barnameh}
                    />
                    <DialogBtn
                      title={"نوع ناوگان و بارگیر"}
                      open={()=>toast('قابل ویرایش نیست')}
                      close={()=>toast('قابل ویرایش نیست')}
                      remove={()=>toast('قابل ویرایش نیست')}
                      selected={data.carrier}
                      secondIcon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          />
                        </svg>
                      }
                    ></DialogBtn>
                    <RadioBtn
                      title={"کرایه موردنظر شما:"}
                      btns={["توافقی", "سرویسی", "تنی"]}
                      exportValue={(value: any) => setFeeType(value)}
                      value={data.feeType}
                      fee={data.suggestedFee}
                    >
                      {data.origin && data.desination && data.carrier && (
                        <div className="flex flex-col">
                          <div className="flex items-center">
                            <span className="min-w-max ml-2">
                              کرایه پیشنهادی آسان بار:
                            </span>
                            <div className="flex flex-wrap">
                              {data.carrier.map((item: any, i: any) => (
                                <p className="text-sm text-myblue" key={i}>
                                  - {item.parent} , {item.child}
                                </p>
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-between items-center my-3">
                            <div className="flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                                />
                              </svg>
                              <p className="mr-1">
                                <span className="text-myblue ml-1">
                                  {data.suggestedFee}
                                </span>
                                تومان
                              </p>
                            </div>
                            <span className="text-xs text-slate-400">
                              به ازای هر {data.feeType == 'سرویسی' ? 'سرویس' : 'تن'}
                            </span>
                          </div>
                        </div>
                      )}
                    </RadioBtn>
                    <hr className="w-full my-3 border-1 border-neutral-300	" />
                    <Accordion
                      title="وارد کردن اطلاعات بیشتر (اختیاری)"
                      detail="با وارد کردن اطلاعات بیشتر راننده ی مناسب خود را سریعتر پیدا کنید"
                    >
                      <DialogBtn
                        open={() => setShowCargo(true)}
                        close={() => setShowCargo(false)}
                        title={"نوع بار"}
                        value={data.cargoType}
                        secondIcon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                          </svg>
                        }
                      ></DialogBtn>
                      <DialogBtn
                        title={"وزن بار"}
                        open={() => setShowWeight(true)}
                        close={() => setShowWeight(false)}
                        value={data.weightType}
                        secondIcon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                          </svg>
                        }
                      ></DialogBtn>
                      <DialogBtn
                        title={"زمان بارگیری"}
                        open={() => setShowLoadingTime(true)}
                        close={() => setShowLoadingTime(false)}
                        value={data.loadingTime}
                        secondIcon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                          </svg>
                        }
                      ></DialogBtn>
                      <DialogBtn
                        title={"زمان تخلیه"}
                        open={() => setShowDischargeTime(true)}
                        close={() => setShowDischargeTime(false)}
                        value={data.dischargeTime}
                        secondIcon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                          </svg>
                        }
                      ></DialogBtn>
                      <Inputbox
                        exportValue={(value: any) => setPhone(value)}
                        title={"شماره اعلام کننده بار"}
                        value={data.phoneNumber}
                        secondIcon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                          </svg>
                        }
                      ></Inputbox>
                      <RadioBtn
                        exportValue={(value: any) => setLoadingDate(value)}
                        title={"تاریخ بارگیری"}
                        btns={["بار امروز", "بار فردا", "بار همه روزه"]}
                        value={data.loadingDate}
                        timePicker={
                          <>
                            <div className="flex justify-between mt-2 items-center">
                              {data.selectedDay ? (
                                <span className="text-xs text-slate-400">
                                  از امروز تا تاریخ
                                </span>
                              ) : (
                                <span className="text-xs text-slate-400">
                                  هنوز تاریخی انتخاب نشده
                                </span>
                              )}
                              <DatePicker
                                value={selectedDay}
                                onChange={setSelectedDay}
                                shouldHighlightWeekends
                                locale="fa"
                              />
                            </div>
                          </>
                        }
                      ></RadioBtn>
                      <Textbox
                        title={"توضیحات (اختیاری)"}
                        value={data.comments}
                        exportValue={(value: any) => setComment(value)}
                        placeholder={
                          "در این قسمت میتوانید به ابعاد، بار، ارزش بار و یا هر نوع اطلاعات دیگر بپردازید"
                        }
                      ></Textbox>
                    </Accordion>
                    <div className="w-full flex justify-center align-center bg-[#f1f5f8] p-4">
                                  {/* <Link href={'/newCargo/specialOffer'}> 
                        <button className="flex gap-2 px-3 py-2 bg-orange-400 text-white rounded-xl mx-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            />
                          </svg>
                          <span>ثبت بار ویژه</span>
                        </button>
                        </Link>
                        <button className="flex gap-2 px-3 py-2 bg-teal-400 text-white rounded-xl mx-2" onClick={()=>registerCargo()}>
                          <span>ثبت بار عادی</span>
                        </button> */}
                    </div>
                  </div>
                </div>
                {showCargo && (
                  <CargoType
                    title={"نوع بار خود را مشخص کنید"}
                    close={() => setShowCargo(false)}
                    select={(value: any) => setCargoType(value)}
                    value={data.cargoType}
                  ></CargoType>
                )}
                {showWeight && (
                  <WeightType
                    title={"وزن را انتخاب کنید"}
                    close={() => setShowWeight(false)}
                    select={(value: any) => setWeight(value)}
                    value={data.weightType}
                  ></WeightType>
                )}
                {showLoadingTime && (
                  <LoadingTime
                    title={"زمان تحویل را انتخاب کنید"}
                    close={() => setShowLoadingTime(false)}
                    select={(value: any) => setLoadingTime(value)}
                    value={data.loadingTime}
                  ></LoadingTime>
                )}
                {showDischargeTime && (
                  <LoadingTime
                    title={"زمان تخلیه را انتخاب کنید"}
                    close={() => setShowDischargeTime(false)}
                    select={(value: any) => setDischargeTime(value)}
                    value={data.dischargeTime}
                  ></LoadingTime>
                )}
              </>
            </Dialog>
          )}
        </>
      ) : (
        <>
          <div className=" mx-4 bg-white border-[1px] rounded-md  ">
            <div className="small_details grid grid-cols-2 justify-items-stretch ">
              <div className="border-b-[1px] border-l-[1px] border-slate-100  px-2 py-3">
                <h3 className="text-gray-400 text-sm">نام راننده</h3>
                علی مرادی
              </div>
              <div className="border-b-[1px]  border-slate-100 px-2 py-3 ">
                <h3 className="text-gray-400 text-sm pb-2">شماره راننده</h3>
                0918341441
              </div>
              <div className="border-b-[1px] border-l-[1px] border-slate-100 px-2 py-3 ">
                <div
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => setConfirm(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 border-2 border-myblue p-1 rounded-full text-myblue"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-myblue">تأیید راننده</span>
                </div>
              </div>
              <div className="border-b-[1px]  border-slate-100  px-2 py-3">
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 border-2 border-myblue p-1 rounded-full text-myblue"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>

                  <span className="text-myblue">تماس با راننده</span>
                </div>
              </div>
            </div>
          </div>
          {confirm && (
            <Dialog title={"تأیید راننده"} close={() => setConfirm(false)}>
              <div className="flex flex-col px-3 py-2">
                <span>آیا این بار را حمل خواهد کرد؟</span>
                <div className="flex gap-3 mx-3 my-2">
                  <button className="bg-slate-300 rounded-mdc w-1/2">
                    خیر
                  </button>
                  <button className="bg-myblue text-white rounded-md w-1/2">
                    بله
                  </button>
                </div>
              </div>
            </Dialog>
          )}
         
        </>
      )}
    </div>
  );
}

export default index;

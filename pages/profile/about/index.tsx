import Link from "next/link";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import { useEffect, useState } from "react";
import axios from "axios";

function index() {
  const [aboutText, setAboutText] = useState('')
  const [telegram, setTelegram] = useState('')
  const [instagram, setInstagram] = useState('')
  useEffect(()=>{
    (async()=>{
      const result = await axios.get('/api/aboutManage')
      console.log('result', result)
      setAboutText(result.data['abouts'][0].aboutasanbarco)
      if(result.data['socials'].length > 0){
        setTelegram(result.data['socials'][0].asanbarcotelegram)
        setInstagram(result.data['socials'][0].asanbarcoinstagram)
      }
    })()
  },[])
  return (
    <div className="w-full h-screen bg-mybg">
      <div className="bg-myblue text-white py-5 px-2 flex justify-between w-full">
        <div className="flex gap-4">
          <Link href={"/profile"}>
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
          <h2>درباره آسان بار</h2>
        </div>
      </div>
      <div className="flex flex-col p-3 pb-6 items-center bg-mybg">
        <img src="/logo.png" className="w-64"></img>
        <h3 className="text-myblue text-xl font-bold">آسان بار</h3>
        <span className="mt-3 text-slate-300">نسخه 1.0.0</span>
        <div className="flex items-center justify-center gap-4 mt-3">
          <Link href={telegram}>
          <TelegramIcon fontSize="large"></TelegramIcon>
          </Link>
          <Link href={instagram}>
          <InstagramIcon fontSize="large"></InstagramIcon>
          </Link>
          <LanguageIcon fontSize="large"></LanguageIcon>
        </div>
        <p className="max-w-1/2 w-full mt-4 px-3">
          {aboutText}
          {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. */}
        </p>
      </div>
    </div>
  );
}

export default index;

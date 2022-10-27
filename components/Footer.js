import Image from 'next/image';

const Footer = () => {
  return (
    <div className="w-full h-[50vh] mt-14 bg-[#585858] flex px-20 pt-20 text-white relative">
      <div className="w-full h-full flex">
        <div className="w-1/3">
          <h4 className="font-semibold text-xl hover:underline cursor-pointer">
            KURUMSAL
          </h4>
          <ul className="cursor-pointer text-md">
            <li className="hover:underline">Hakkımızda</li>
            <li className="hover:underline">Kariyer</li>
            <li className="hover:underline">İletişim</li>
            <li className="hover:underline">Çerez Kullanımı</li>
            <li className="hover:underline">Sözleşmeler</li>
            <li className="hover:underline">KVKK</li>
          </ul>
        </div>
        <div className="w-1/3">
          <h4 className="font-semibold text-xl hover:underline cursor-pointer">
            YARDIM
          </h4>
          <ul className="cursor-pointer text-md">
            <li className="hover:underline">İptal&İade Şartları</li>
            <li className="hover:underline">Kolay İade</li>
            <li className="hover:underline">Üyelik</li>
            <li className="hover:underline">Beden</li>
          </ul>
        </div>
        <div className="w-1/3">
          <h4 className="font-semibold text-xl hover:underline cursor-pointer">
            ALIŞVERİŞ
          </h4>
          <ul className="cursor-pointer text-md">
            <li className="hover:underline">Kampanyalar</li>
            <li className="hover:underline">Sipariş Takibi</li>
            <li className="hover:underline">Güvenli Alışveriş</li>
            <li className="hover:underline">Kargo&Teslimat</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-full background-white flex">
        <div className="w-1/2">
          <div className="w-3/5 flex justify-between border-b-2 pb-2 border-black">
            <Image
              className="cursor-pointer"
              src="/social/facebook.png"
              alt="facebook-icon"
              height="28px"
              width="28px"
            />
            <Image
              className="cursor-pointer"
              src="/social/twitter.png"
              alt="twitter-icon"
              height="28px"
              width="28px"
            />
            <Image
              className="cursor-pointer"
              src="/social/instagram.png"
              alt="instagram-icon"
              height="30px"
              width="30px"
            />
            <Image
              className="cursor-pointer"
              src="/social/youtube.png"
              alt="youtube-icon"
              height="30px"
              width="30px"
            />
          </div>
          <div className="text-black text-md font-semibold mt-3">
            Bizi Sosyal Medyada Takip edin
          </div>
          <div className="mt-3 flex text-black font-semibold gap-2 cursor-pointer">
            <Image
              src="/social/mail.png"
              alt="logo"
              height="24px"
              width="24px"
            />
            hello@osgstore.com
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <div className="-mt-6">
            <Image src="/logo.svg" height="80px" width="80px" />
          </div>

          <span className="text-black font-semibold -mt-3 mb-4">
            Yeni koleksiyonlardan ve indirimlerden haberdar olmak için
            bültenimizi takip edin.
          </span>
          <form>
            <input
              type="text"
              id="first_name"
              className="bg-transparent border-b-2 border-black text-black placeholder-black outline-0"
              placeholder="Mail adresinizi girin..."
            />
            <button className="font-semibold text-black ml-2">Gönder</button>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 translate-x-[-50%] font-semibold font-sans">
        © 2022 OSG - Tüm Hakları Saklıdır
      </div>
    </div>
  );
};
export default Footer;

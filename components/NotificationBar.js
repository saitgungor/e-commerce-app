const NotificationBar = () => {
  const menuItems = [
    `14:00'a kadar verilen siparişleriniz aynı gün kargoda.`,
    '60 gün içerisinde koşulsuz iade hakkı!',
    '500₺ üzeri kargo ücretsiz.',
    'Yeni üyelere özel %10 Hoş geldin indirimi',
  ];
  return (
    <div className="w-full h-[18px] md:h-[20px] lg:h-[22px] xl:h-[24px] bg-primary1 relative flex items-center text-center text-secondary1 font-medium overflow-hidden">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="w-full text_slider absolute text-center text-xl-14"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default NotificationBar;

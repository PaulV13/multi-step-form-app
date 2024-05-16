function Confirm({ checkMark }: { checkMark: string }) {
  return (
    <div className="flex flex-col items-center gap-3 py-14">
      <img src={checkMark} alt="Check mark" className="w-12" />
      <h1 className="text-3xl font-bold text-blue-950">Thank you!</h1>
      <p className="text-gray-400 text-center text-sm">
        Thanks for confirming your subscription! We hope you have fun using our
        plataform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default Confirm;

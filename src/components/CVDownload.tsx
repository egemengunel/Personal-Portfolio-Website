const CVDownload = () => {
  const CV_URL = "https://drive.google.com/file/d/1uYTpi3LnS2Y2sedLcY6NKhL9QkH85I35/view?usp=share_link";


  return (
    <p className="text-base md:text-lg text-gray-700 mt-4 text-center md:text-left">
      You can view my resume {" "}
      <a
        href={CV_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold underline decoration-2 underline-offset-4 hover:text-black transition-colors"
      >
       here
      </a>
    </p>
  );
}

export default CVDownload;
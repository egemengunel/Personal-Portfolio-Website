const CVDownload = () => {
  const CV_IOS_URL = "https://drive.google.com/file/d/1NbJ0KSxO-7gRAEVFfcJFwbUycVh17pMR/view?usp=sharing";
  const CV_WEB_URL = "https://drive.google.com/file/d/1RVC5S7_SKJzWwz0bYxpQ1SSaKK3CNfAa/view?usp=sharing" 

  return (
    <p className="text-base md:text-lg text-gray-700 mt-4 text-center md:text-left">
      You can view my resume here: {" "}
      <a
        href={CV_IOS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold underline decoration-2 underline-offset-4 hover:text-black transition-colors"
      >
        iOS Developer
      </a>
      {" "} | {" "}
      <a
        href={CV_WEB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold underline decoration-2 underline-offset-4 hover:text-black transition-colors"
      >
        Web Developer
      </a>
    </p>
  );
}

export default CVDownload;
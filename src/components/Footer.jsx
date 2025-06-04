function Footer() {
  return (
    <footer className="bg-neutral-800 text-white py-4 mt-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="mb-0 text-sm">
              Clinical Diagnosis Assistant &copy; {new Date().getFullYear()}
            </p>
          </div>
          <div className="text-xs text-neutral-400">
            <p className="mb-0">
              Disclaimer: This tool is for educational purposes only and should not replace professional medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
function expo() {
  // const contentContainer = document.getElementById("editable").innerHTML;
  // console.log(contentContainer);
  // const htmlJson = html2json(contentContainer);

  const htmlJson = html2json(document.body.innerHTML);

  const json = htmlJson;

  function downloadJSONFile(data, filename) {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });

    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      // For IE and Edge browsers
      window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      // For other browsers
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;

      // Ensure the link is hidden
      link.style.display = "none";
      document.body.appendChild(link);

      // Simulate a click event to trigger the download
      link.click();

      // Clean up resources
      URL.revokeObjectURL(url);
      document.body.removeChild(link);
    }
  }

  const filename = "index.json";
  downloadJSONFile(json, filename);
}

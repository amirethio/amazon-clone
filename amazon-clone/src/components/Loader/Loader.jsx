
import { ScaleLoader } from "react-spinners";
function Loader() {
  return (
    <div style={
        {
            display:"flex",
            alignItems: "center",
            justifyContent:"center",
            height:"50vh"
        }
    }>
      <ScaleLoader />
    </div>
  );
}

export default Loader

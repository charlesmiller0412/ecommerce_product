import { CloseIcon } from "../../assets/closeIcon";
import Gallery from "./gallery";

export const Lighthouse = (props: any) => {
    return (
        <div className="lighthouse">
            <div className="lighthouse__gallery">
                <div
                    className="lighthouse__gallery--close"
                    onClick={() => {
                        props.setShowLighthouse(false);
                    }}
                >
                    <CloseIcon />
                </div>
                <Gallery className="lighthouse__gallery--images" />
            </div>
        </div>
    );
};

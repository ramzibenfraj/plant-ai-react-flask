import React from "react";
import { ReactComponent as IconLeaf } from "../icons/leaf.svg";
import { ReactComponent as IconBrain } from "../icons/brain.svg";
import { ReactComponent as IconData } from "../icons/database.svg";


const CardAI = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-header fw-bold text-uppercase">
        AI in Agriculture
      </div>
      <div className="card-body">
        <div className="row border-bottom">
          <div className="col-2">
            <IconLeaf width={40} height={40} />
          </div>
          <div className="col">
            <div className="ms-3">
              <span className="fw-bold">Plant Disease Detection</span>
              <p className="text-muted small">Identify diseases accurately</p>
            </div>
          </div>
        </div>
        <div className="row border-bottom py-3">
          <div className="col-2">
            <IconBrain width={40} height={40} />
          </div>
          <div className="col">
            <div className="ms-3">
              <span className="fw-bold">AI-Powered Solutions</span>
              <p className="text-muted small m-0">Optimize crop management</p>
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-2">
            <IconData width={40} height={40} />
          </div>
          <div className="col">
            <div className="ms-3">
              <span className="fw-bold">Data-driven Insights</span>
              <p className="text-muted small m-0">Utilize vast datasets for accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAI;

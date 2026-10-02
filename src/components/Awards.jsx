import { useState } from "react";
import { Award, Trophy, X } from "lucide-react";

import { awards } from "../data/awards";

export default function Awards() {
  const [selected, setSelected] = useState(null);

  const wonCount = awards.filter(
    (item) => item.result === "Won"
  ).length;

  const nominationCount = awards.filter(
    (item) => item.result === "Nominated"
  ).length;

  return (
    <section className="awards-section" id="awards">

      {/* HEADER */}

      <div className="section-heading">

        <span>03</span>

        <div>
          <p>THE RECOGNITION</p>
          <h2>AWARDS</h2>
        </div>

      </div>


      <div className="awards-intro">

        <p>
          A chronological record of awards and nominations
          across film and television.
        </p>

        <div className="awards-stats">

          <div>
            <strong>{wonCount}</strong>
            <span>WINS</span>
          </div>

          <div>
            <strong>{nominationCount}</strong>
            <span>NOMINATIONS</span>
          </div>

        </div>

      </div>


      {/* AWARDS LIST */}

      <div className="awards-list">

        {awards.map((item, index) => (

          <article
            className="award-row"
            key={`${item.award}-${item.year}-${index}`}
            onClick={() => setSelected(item)}
          >

            <div className="award-year">
              {item.year}
            </div>


            <div className="award-main">

              <div className="award-name">
                {item.award}
              </div>

              <h3>
                {item.category || "—"}
              </h3>

              <p>
                {item.work || "—"}
              </p>

            </div>


            <div
              className={`award-result ${
                item.result === "Won"
                  ? "won"
                  : "nominated"
              }`}
            >
              {item.result}
            </div>

          </article>

        ))}

      </div>


      {/* DETAIL MODAL */}

      {selected && (

        <div
          className="modal-backdrop"
          onClick={() => setSelected(null)}
        >

          <div
            className="archive-modal award-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() => setSelected(null)}
            >
              <X />
            </button>


            <div className="modal-year">
              {selected.year}
            </div>


            <div className="award-modal-icon">
              {selected.result === "Won" ? (
                <Trophy size={28} />
              ) : (
                <Award size={28} />
              )}
            </div>


            <h2>
              {selected.award}
            </h2>


            <p className="modal-label">
              CATEGORY
            </p>

            <p className="modal-value">
              {selected.category || "—"}
            </p>


            <p className="modal-label">
              NOMINATED WORK
            </p>

            <p className="modal-value">
              {selected.work || "—"}
            </p>


            <p className="modal-label">
              RESULT
            </p>

            <p
              className={`modal-result ${
                selected.result === "Won"
                  ? "won"
                  : "nominated"
              }`}
            >
              {selected.result}
            </p>

          </div>

        </div>

      )}

    </section>
  );
}
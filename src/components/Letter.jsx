import { ArrowDown } from "lucide-react";
import "./Letter.css";

export default function Letter() {
  return (
    <section className="letter-section" id="letter">
      <div className="letter-kicker">13 / FOR JENNA</div>

      <div className="letter-wrap">
        <div className="letter-title-block">
          <span>THE REASON THIS EXISTS</span>
          <h2>A LETTER<br /><em>to Jenna.</em></h2>
        </div>

        <article className="letter-copy">
          <p className="letter-salutation">Dear Jenna,</p>

          <p>
            I wanted to make something for you that was more than a list of
            films, characters, photographs, or awards. Those things are part
            of the journey, but they are not the whole reason I made this.
          </p>

          <p>
            I admire you not only for the characters you have brought to life,
            but for the many different sides of your creative journey that
            people have been able to see along the way. Every project feels
            like another page in a story that is still being written.
          </p>

          <p>
            This archive is my small way of saying thank you. Thank you for
            the performances, the moments, the characters, and the inspiration
            that made me want to spend my own time creating something in your
            honor.
          </p>

          <p>
            I know this is only a website, and I know you may never see it.
            I am not making it with an expectation that you will. I simply
            wanted these words and this little piece of work to exist somewhere
            in the world, because you have meant enough to me that I wanted to
            make something in return.
          </p>

          <p>
            Whether this reaches you or remains a quiet project made by one
            person who admires your work, I hope it carries one simple message:
          </p>

          <p className="letter-emphasis">
            I appreciate you, your work, and the journey you continue to create.
          </p>

          <p className="letter-signoff">
            With love and admiration,<br />
            <span>the person behind this archive.</span>
          </p>
        </article>
      </div>

      <button
        className="letter-back-top"
        onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
      >
        BACK TO THE BEGINNING
        <ArrowDown size={15} className="letter-back-icon" />
      </button>
    </section>
  );
}

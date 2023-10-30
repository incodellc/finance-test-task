import './ContactsPage.scss';

export const ContactsPage = () => {
  return (
    <div className="contact_item">
      <div className="contact_main">
        <img
          src="https://ca.slack-edge.com/T0PE08HSR-U050ZTXD6KB-c54741a143ee-512"
          className="contact-ava"
          alt="User"
        />

        <h1>Oleksandr Cheban</h1>
      </div>

      <p className="contact_info">
        <a
          href="https://www.linkedin.com/in/oleksandr-cheban-832ba5237/"
          className="contact_link"
        >
          <img
            src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png"
            className="contact_icon"
            alt="LinkedIn"
          />
          LinkedIn
        </a>
      </p>

      <p className="contact_info">
        <a
          href="https://github.com/cebanoleksandr"
          className="contact_link"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            className="contact_icon"
            alt="Github"
          />
          Github
        </a>
      </p>

      <p className="contact_info">
        <a
          href="mailto:cebanoleksandr@gmail.com"
          className="contact_link"
        >
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
            className="contact_icon"
            alt="Email"
          />
          Email
        </a>
      </p>

      <p className="contact_info">
        <a
          href="https://drive.google.com/file/d/130xwf1hRG5n27ajGCQYuT6cgchPWhxVK/view?usp=sharing"
          className="contact_link"
        >
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/general-icon-library/resume-7.png"
            className="contact_icon"
            alt="LinkedIn"
          />
          Resume
        </a>
      </p>

      <p className="contact_info">
        <a
          href="http://bit.ly/3riaz8l"
          className="contact_link"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/427/427648.png"
            className="contact_icon"
            alt="LinkedIn"
          />
          Self-presentation
        </a>
      </p>

      <p className="my-text">
      1-year-experienced Fullstack Software Developer seeking fresh
professional prospects. Adept at crafting single-page applications,
with a portfolio of over 15 apps developed in React and Angular.
      </p>

      <p className="my-text">
      Proficient in Redux, HTML, SCSS, JavaScript, TypeScript, Node.js, REST
API integration, and Scrum methodology. Basic proficiency in SQL,
GIT, Regular Expressions, Web Sockets, Ant Design, and Bootstrap.
Driven by continuous self-improvement across all facets of life, I
thrive in collaborative environments with like-minded individuals.
      </p>

      <p className="my-text">
      Having lived in more than 10 cities, I possess a broad perspective.
Overcoming my fear of public speaking, I've progressed from
presenting to 15 individuals to addressing audiences of 200, owing to
my background in network marketing.
      </p>

      <p className="my-text">
      Equipped with Upper-
Intermediate English and Intermediate Polish language skills, I am
confident in conducting demos due to my public speaking training.
Leveraging insights from over 100 personal development books, I
foster harmony among teammates.
      </p>
    </div>
  );
}

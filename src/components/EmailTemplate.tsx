type EmailTemplateProps = {
  email: string;
  emailContents: string;
};

export default function EmailTemplate(props: EmailTemplateProps) {
  const email: [string, any][] = Object.entries(JSON.parse(props.email));
  const contents: Object = JSON.parse(props.emailContents);
  return (
    <div>
      <h1>Feed Back</h1>
      <div>
        <span>
          {email[0][0]}: {email[0][1]}
        </span>
      </div>
      {Object.entries(contents).map((content) => {
        return (
          <div key={content[0]}>
            {/* name */}
            <span>{content[0]}:</span>
            {/* value */}
            <span>{content[1]}</span>
          </div>
        );
      })}
    </div>
  );
}

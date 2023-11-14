type EmailTemplateProps = {
  email: string;
  emailContents: string;
};

export default function EmailTemplate(props: EmailTemplateProps) {
  const email: [string, string][] = Object.entries(
    JSON.parse(props.emailContents)
  );
  const contents: Object = JSON.parse(props.emailContents);
  return (
    <div>
      <h1>Feed Back</h1>
      <div>
        {email[0][0]}:{email[0][1]}
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

type EmailTemplateProps = {
  emailContents: string;
};

export default function EmailTemplate(props: EmailTemplateProps) {
  const contents: Object = JSON.parse(props.emailContents);
  return (
    <div>
      <h1>Feed Back</h1>
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

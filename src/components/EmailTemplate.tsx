type EmailTemplateProps = {
  emailContents: string;
};

export default function EmailTemplate(props: EmailTemplateProps) {
  return (
    <div>
      <h1>Feed Back</h1>
      <p>{props.emailContents}</p>
    </div>
  );
}

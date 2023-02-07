/* eslint-disable react/no-unescaped-entities */
import Input from "@/components/Input/Input";

export default function Buttons() {
  return (
    <>
      <div className="flex-container wrapper">
        <div className="item">
          <p>Input</p>
        </div>

        <div className="flex-container">
          <div className="inputContainer">
            <code>&lt;Input /&gt;</code>
            <Input placeholder="Placeholder" label="Label" />
          </div>
          <div className="inputContainer">
            <code>&:hover</code>
            <Input placeholder="Placeholder" label="Label" />
          </div>
          <div className="inputContainer">
            <code>&:focus</code>
            <Input placeholder="Placeholder" label="Label" />
          </div>
        </div>

        <div className="flex-container">
          <div className="inputContainer">
            <code>&lt;Input error/&gt;</code>
            <Input placeholder="Placeholder" label="Label" error />
          </div>
          <div className="inputContainer">
            <code>&:hover</code>
            <Input
              placeholder="Placeholder"
              label="Label"
              helperText="helper text goes here"
              error
            />
          </div>
          <div className="inputContainer">
            <code>&lt;:focus/&gt;</code>
            <Input placeholder="Placeholder" label="Label" error />
          </div>
        </div>

        <div className="flex-container">
          <div className="inputContainer">
            <code>&lt;Input disable/&gt;</code>
            <Input placeholder="Placeholder" label="Label" disabled />
          </div>
        </div>

        <div className="flex-container">
          <div className="inputContainer">
            <code>&lt;Input helperText="This is helper text" /&gt;</code>
            <Input
              placeholder="Placeholder"
              label="Label"
              helperText="This would be helper text"
            />
          </div>
          <div className="inputContainer">
            <code>&lt;Input helperText="This is helper text" error /&gt;</code>
            <Input
              placeholder="Placeholder"
              label="Label"
              helperText="This input is in error state"
              error
            />
          </div>
        </div>

        <div className="flex-container">
          <div className="inputContainer">
            <code>&lt;Input value="Text" /&gt;</code>
            <Input placeholder="Placeholder" label="Label" value="Text" />
          </div>
        </div>

        <div className="flex-container">
          <div className="inputContainer">
            <code>&lt;Input startIcon="face" /&gt;</code>
            <Input
              placeholder="Placeholder"
              label="Label"
              helperText="This would be helper text"
              startIcon="face"
            />
          </div>
          <div className="inputContainer">
            <code>&lt;Input endIcon="face" /&gt;</code>
            <Input
              placeholder="Placeholder"
              label="Label"
              helperText="This input has an icon at the end"
              endIcon="face"
            />
          </div>
          <div className="inputContainer">
            <code>&lt;Input startIcon="settings" endIcon="close" /&gt;</code>
            <Input
              placeholder="Placeholder"
              label="Label"
              helperText="This input has both icons"
              endIcon="close"
              startIcon="settings"
            />
          </div>
        </div>

        <div className="flex-container">
          <div className="inputContainer">
            <code>&lt;Input size="sm" /&gt;</code>
            <Input placeholder="Placeholder" label="Label" size="sm" />
          </div>
          <div className="inputContainer">
            <code>&lt;Input size="md" /&gt;</code>
            <Input placeholder="Placeholder" label="Label" size="md" />
          </div>
        </div>

        <div className="flex-container fullWidth">
          <div className="inputContainer fullWidth">
            <code>&lt;Input fullWidth /&gt;</code>
            <Input
              placeholder="Placeholder"
              label="Label"
              value="Full width input"
              fullWidth
            />
          </div>
        </div>

        <div className="flex-container">
          <div className="inputContainer">
            <code>&lt;Input multiline rows="4" /&gt;</code>
            <Input
              placeholder="Placeholder"
              label="Label"
              value="Multiple lines here in this input and here are some more lines to throw until we get to 4 but not more than that"
              multiline
              rows={4}
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .flex-container {
            display: flex;
            gap: 16px;
          }
          .wrapper {
            margin: 24px auto;
            max-width: 90%;
            font-family: "Noto Sans JP";
            flex-direction: column;
            justify-content: center;
            align-items: start;
            gap: 16px;
          }
          .wrapper > .item {
          }
          .inputContainer {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .inputContainer > code {
            color: #333333;
            font-family: "Ubuntu Mono";
            font-size: 12px;
            font-weight: 400;
            line-height: 12px;
            height: 12px;
          }
          .fullWidth {
            width: 100%;
          }
        `}
      </style>
    </>
  );
}

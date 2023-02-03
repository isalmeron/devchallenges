/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/Button/Button";

export default function Buttons() {
  return (
    <>
      <div className="flex-container wrapper">
        <div className="item">
          <p>Buttons</p>
        </div>

        <div className="flex-container">
          <div className="buttonContainer">
            <code>&lt;Button /&gt;</code>
            <Button>Default</Button>
          </div>
          <div className="buttonContainer">
            <code>&:hover, &:focus</code>
            <Button>Default</Button>
          </div>
        </div>

        <div className="flex-container">
          <div className="buttonContainer">
            <code>&lt;Button variant="outline" /&gt;</code>
            <Button variant="outline">Default</Button>
          </div>
          <div className="buttonContainer">
            <code>&:hover, &:focus</code>
            <Button variant="outline">Default</Button>
          </div>
        </div>

        <div className="flex-container">
          <div className="buttonContainer">
            <code>&lt;Button variant="text" /&gt;</code>
            <Button variant="text">Default</Button>
          </div>
          <div className="buttonContainer">
            <code>&:hover, &:focus</code>
            <Button variant="text">Default</Button>
          </div>
        </div>

        <div className="flex-container">
          <div className="buttonContainer">
            <code>&lt;Button disableShadow /&gt;</code>
            <Button disableShadow color="primary">
              Default
            </Button>
          </div>
        </div>

        <div className="flex-container">
          <div className="buttonContainer">
            <code>&lt;Button disabled /&gt;</code>
            <Button disabled>Default</Button>
          </div>
          <div className="buttonContainer">
            <code>&lt;Button disabled variant="text" /&gt;</code>
            <Button variant="text" disabled>
              Default
            </Button>
          </div>
        </div>

        <div className="flex-container">
          <div className="buttonContainer">
            <code>&lt;Button startIcon="local_grocery_store" /&gt;</code>
            <Button startIcon="local_grocery_store">Default</Button>
          </div>
          <div className="buttonContainer">
            <code>&lt;Button endIcon="local_grocery_store" /&gt;</code>
            <Button endIcon="local_grocery_store">Default</Button>
          </div>
        </div>

        <div className="flex-container">
          <div className="buttonContainer">
            <code>&lt;Button size="sm" /&gt;</code>
            <Button size="sm">Default</Button>
          </div>
          <div className="buttonContainer">
            <code>&lt;Button size="md" /&gt;</code>
            <Button size="md">Default</Button>
          </div>
          <div className="buttonContainer">
            <code>&lt;Button size="lg" /&gt;</code>
            <Button size="lg">Default</Button>
          </div>
        </div>

        <div className="flex-container">
          <div className="buttonContainer">
            <code>&lt;Button color="default" /&gt;</code>
            <Button color="default">Default</Button>
          </div>
          <div className="buttonContainer">
            <code>&lt;Button color="primary" /&gt;</code>
            <Button color="primary">Default</Button>
          </div>
          <div className="buttonContainer">
            <code>&lt;Button color="secondary" /&gt;</code>
            <Button color="secondary">Secondary</Button>
          </div>
          <div className="buttonContainer">
            <code>&lt;Button color="danger" /&gt;</code>
            <Button color="danger">Danger</Button>
          </div>
        </div>

        <div className="flex-container">
          <div className="buttonContainer">
            <code>&:hover, &:focus</code>
            <Button color="default">Default</Button>
          </div>
          <div className="buttonContainer">
            <code></code>
            <Button color="primary">Default</Button>
          </div>
          <div className="buttonContainer">
            <code></code>
            <Button color="secondary">Secondary</Button>
          </div>
          <div className="buttonContainer">
            <code></code>
            <Button color="danger">Danger</Button>
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
          .buttonContainer {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .buttonContainer > code {
            color: #333333;
            font-family: "Ubuntu Mono";
            font-size: 12px;
            font-weight: 400;
            line-height: 12px;
            height: 12px;
          }
        `}
      </style>
    </>
  );
}

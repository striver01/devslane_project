import React from "react";
import { Switch } from '@headlessui/react';

interface Props {}

const ToggleButton: React.FC<Props> = (props) => {
  const [enabled, setEnabled] = React.useState(false);
  return (
    <div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-blue-200" : "bg-gray-200"
        } relative inline-flex items-center h-4.5 rounded-full w-8.75`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-4" : "translate-x-1"
          } inline-block w-3.5 h-3.5 transform bg-Primary rounded-full`}
        />
      </Switch>
    </div>
  );
};
ToggleButton.defaultProps = {};
export default ToggleButton;

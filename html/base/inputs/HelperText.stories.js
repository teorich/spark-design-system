export default {
  title: 'Components/Input/Helper Text',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const helperText = () => (
  `
    <div class="sprk-b-InputContainer">
      <label
        for="text-input-helper"
        class="sprk-b-Label"
      >
        Text Input Label
      </label>

      <input
        class="sprk-b-TextInput sprk-u-Width-100"
        id="text-input-helper"
        data-id="text-input-helper"
        type="text"
        value=""
        aria-describedby="text-input-helper--error-container"
        aria-invalid="true"
      >

      <div class="sprk-b-HelperText">
        Optional helper text, used to clarify the field&#x27;s intent.
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="text-input-helper--error-container"
      ></div>
    </div>
  `
);

helperText.story = {
  name: 'Default',
};

export const invalidHelperText = () => (
  `
    <div class="sprk-b-InputContainer">
      <label
        for="text-input-helper"
        class="sprk-b-Label"
      >
        Text Input Label
      </label>

      <input
        class="sprk-b-TextInput sprk-b-TextInput--error sprk-u-Width-100"
        id="text-input-helper"
        data-id="text-input-helper"
        type="text"
        value=""
        aria-describedby="text-input-helper--error-container"
        aria-invalid="true"
      >

      <div class="sprk-b-HelperText">
        Optional helper text, used to clarify the field&#x27;s intent.
      </div>

      <div
        class="sprk-b-ErrorContainer"
        id="text-input-helper--error-container"
      >
        <svg
          class="sprk-c-Icon sprk-c-Icon--m sprk-b-ErrorIcon"
          viewBox="0 0 64 64"
        >
          <use xlink:href="#exclamation-filled-small" />
        </svg>
        <div class="sprk-b-ErrorText">
          There is an error on this field.
        </div>
      </div>
    </div>
  `
);

invalidHelperText.story = {
  name: 'With Error Text',
};

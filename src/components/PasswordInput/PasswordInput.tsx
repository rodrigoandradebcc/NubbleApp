import React, {useState} from 'react';
import {Icon} from '../Icon';
import {TextInput, TextInputProps} from '../TextInput/TextInput';

type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry(prev => !prev);
  }

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      RightComponent={
        <Icon color="gray2" name="eyeOn" onPress={toggleSecureTextEntry} />
      }
    />
  );
}

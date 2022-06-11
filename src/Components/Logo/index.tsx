import {Command, commandVisibleScreenWidth, CommandWrapper, LogoWrapper, ShellSign, Underscore} from "./index.styles";
import React from "react";
import {useWindowSize} from "../../Hooks/WindowHooks";
import {getRandomIndexBetween} from "../../Utils/MathUtils";

const commands: string[] = [
    'id',
    'which python',
    'cd /tmp',
    'ls -la',
    'cat /etc/passwd',
    'nc -e /bin/bash',
    'su root',
    'find / -perm -u=s',
    'getcap / -r',
    'uname -r',
    'ps aux',
    'locate SecLists',
    'sudo -l',
    'ifconfig -a',
    'echo $PATH',
    'hashcat -m 0 -a 0',
    'grep -ir "password"',
    'ssh root@$IP',
    'openssl passwd -6',
    'chmod +x script.sh',
];

const getRandomCommand = (): string => {
    const index = getRandomIndexBetween(commands.length);
    return commands[index];
}

export const Logo = () => {
    const [currentCommand, setCurrentCommand] = React.useState<string>(getRandomCommand());
    const size = useWindowSize();

    React.useEffect(() => {
        if (size.width <= commandVisibleScreenWidth) {
            setCurrentCommand('');
        } else if (currentCommand === ''){
            setCurrentCommand(getRandomCommand());
        }
    }, [size]);

    React.useEffect(() => {
        setTimeout(() => {
            if (size.width > commandVisibleScreenWidth) {
                // typing here
            }
        }, 500);
    }, []);

    return (
        <LogoWrapper>
            <ShellSign>$</ShellSign>
            <CommandWrapper>
                <Command>{currentCommand}</Command>
                <Underscore>_</Underscore>
            </CommandWrapper>
        </LogoWrapper>
    )
}

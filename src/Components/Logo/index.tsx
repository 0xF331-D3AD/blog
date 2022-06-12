import {Command, commandVisibleScreenWidth, CommandWrapper, LogoWrapper, ShellSign, Underscore} from "./index.styles";
import React from "react";
import {useWindowSize} from "../../Hooks/WindowHooks";
import {getRandomIndex} from "../../Utils/MathUtils";

const commands: string[] = [
    'id',
    'which python',
    'cd /tmp',
    'ls -la /home',
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
    'strings file.exe',
    'netstat -tulpn',
    './enum.sh | tee res',
];

const getRandomCommand = (): string => {
    const index = getRandomIndex(commands.length);
    return commands[index];
}

export const Logo = () => {
    const [currentCommand, setCurrentCommand] = React.useState<string>(getRandomCommand());
    const [displayedCommand, setDisplayedCommand] = React.useState<string>('');
    const size = useWindowSize();

    const displayedCommandLength = React.useRef(0);
    const typingInterval = React.useRef<NodeJS.Timer | undefined>();
    const typingRateMs = 550;

    const initTypingInterval = (size: { width: number }, command: string) => setInterval(() => {
        if (size.width > commandVisibleScreenWidth) {
            const partOfCommand = command.substring(0, displayedCommandLength.current);
            displayedCommandLength.current += 1;
            setDisplayedCommand(partOfCommand);
        }
    }, typingRateMs);

    React.useEffect(() => {
        if (size.width <= commandVisibleScreenWidth) {
            displayedCommandLength.current = 0;
            setDisplayedCommand('');
            clearInterval(typingInterval.current);
            typingInterval.current = undefined;
        } else if (!typingInterval.current) {
            // @ts-ignore
            typingInterval.current = initTypingInterval(size, currentCommand);
        }
    }, [size]);

    React.useEffect(() => {
        if (displayedCommand === currentCommand) {
            setTimeout(() => {
                displayedCommandLength.current = 0;
                const newCommand = getRandomCommand();
                setCurrentCommand(newCommand);
                setDisplayedCommand('');

                clearInterval(typingInterval.current);
                typingInterval.current = initTypingInterval(size, newCommand);
            }, typingRateMs);
        }
    }, [displayedCommand]);

    return (
        <LogoWrapper>
            <ShellSign>$</ShellSign>
            <CommandWrapper>
                <Command>{displayedCommand}</Command>
                <Underscore>_</Underscore>
            </CommandWrapper>
        </LogoWrapper>
    )
}

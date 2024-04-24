import { Button, Dropdown, Space } from 'antd';
import { ConnectKitButton } from 'connectkit';
import { useAccount, useSwitchNetwork } from 'wagmi';

export function Layout({ Component }: any) {
	const { isConnected } = useAccount();
	const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork();

	const items = chains.map((x: any, i: number): { key: string, label: any } => {
		return {
			key: x.id,
			label: (
				<div
					onClick={() => switchNetwork?.(x.id)}
					onKeyDown={(event) => {
						if (event.key === 'Enter' || event.key === ' ') {
							switchNetwork?.(x.id);
						}
					}}
				>
					{x.name} {isLoading && pendingChainId === x.id && ' (switching)'}
				</div>
			),
		};
	});

	return (
		<div>
		  <header>
			{isConnected && (
			  <Dropdown menu={{ items }}>
				<Button>
				  <Space>Switch Network</Space>
				</Button>
			  </Dropdown>
			)}
			<ConnectKitButton />
		  </header>
	  
		  <main>{Component}</main>
		</div>
	  );
	  
}

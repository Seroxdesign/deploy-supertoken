import { Button, Dropdown, Space } from 'antd';
import { ConnectKitButton } from 'connectkit';
import { useAccount, useSwitchChain } from 'wagmi';

export function Layout({ Component }: any) {
	const { isConnected } = useAccount();
	const { chains, error,  switchChain } = useSwitchChain();

	const items = chains.map((x: any, i: number): { key: string, label: any } => {
		return {
			key: x.id,
			label: (
				<div
					onClick={() => switchChain?.(x.id)}
					onKeyDown={(event) => {
						if (event.key === 'Enter' || event.key === ' ') {
							switchChain?.(x.id);
						}
					}}
					role="button"
					tabIndex={i}
				>
					{x.name} 
					{/* TODO: bring back the loading, after v1 deprecated */}
					{/* {isLoading && pendingChainId === x.id && ' (switching)'} */}
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

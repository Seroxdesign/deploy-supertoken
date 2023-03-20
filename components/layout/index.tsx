import { Button, Dropdown, Space } from 'antd';
import { ConnectKitButton } from 'connectkit';
import { useAccount, useSwitchNetwork } from 'wagmi';

export function Layout({ Component }: any) {
	const { isConnected } = useAccount();
	const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork();

	const items = chains.map((x) => {
		return {
			key: x.id,
			label: (
				<a onClick={() => switchNetwork?.(x.id)}>
					{x.name} {isLoading && pendingChainId === x.id && ' (switching)'}
				</a>
			),
		};
	});

	return (
		<div>
			<header
				style={{
					padding: '1em',
					borderBottom: '3px solid #30303030',
					display: 'flex',
					gap: '15px',
					alignItems: 'center',
					justifyContent: 'right',
				}}>
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

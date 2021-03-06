import React from 'react'
import { RouteComponentProps } from 'react-router'

import Link from '@material-ui/core/Link'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'

import GitHub from '@material-ui/icons/GitHub'
import AllInclusive from '@material-ui/icons/AllInclusive'
import ViewComfy from '@material-ui/icons/ViewComfy'
import SwapCalls from '@material-ui/icons/SwapCalls'
import BlurOn from '@material-ui/icons/BlurOn'
import BubbleChart from '@material-ui/icons/BubbleChart'
import EmojiSymbols from '@material-ui/icons/EmojiSymbols'
import Settings from '@material-ui/icons/Settings'
import Web from '@material-ui/icons/Web'

import PythonIcon from './python-icon'
import ArchIcon from './arch-icon'

type ListItemLinkProps = {
	href?: string
	icon?: React.ReactNode | React.ElementType
	text?: React.ReactNode
	sub?: React.ReactNode
}

const ListItemLink = ({
	href, icon, text, sub,
}: ListItemLinkProps = {}) => (
	<ListItem button component={Link} href={href}>
		<ListItemAvatar>
			<Avatar>
				{React.isValidElement(icon) ? icon : icon && React.createElement(icon as React.ElementType)}
			</Avatar>
		</ListItemAvatar>
		<ListItemText primary={text} secondary={sub}/>
	</ListItem>
)

const GitHubItems = () => (
	<>
		<ListItem><ListItemText primary="2nd author"/></ListItem>
		<ListItemLink
			href="https://github.com/theislab/scanpy"
			icon={AllInclusive}
			text="scanpy"
			sub="single cell analysis in Python"
		/>
		<ListItem><ListItemText primary="1st, main, or only author"/></ListItem>
		<ListItemLink
			href="https://github.com/theislab/anndata"
			icon={ViewComfy}
			text="AnnData"
			sub="annotated single cell expression matrix for Python"
		/>
		<ListItemLink
			href="https://github.com/theislab/anndata2ri"
			icon={SwapCalls}
			text="anndata2ri"
			sub="convert between AnnData (Python) and SingleCellExperiment (R)"
		/>
		<ListItemLink
			href="https://github.com/theislab/destiny"
			icon={BlurOn}
			text="destiny"
			sub="diffusion maps, pseudotime, and gene relevance in R"
		/>
		<ListItemLink
			href="https://github.com/IRkernel/IRkernel"
			icon={BubbleChart}
			text="IRkernel"
			sub="R kernel for JupyterLab/Notebooks"
		/>
		<ListItemLink
			href="https://github.com/IRkernel/repr"
			icon={EmojiSymbols}
			text="repr"
			sub="rich representations for R objects"
		/>
		<ListItemLink
			href="https://github.com/flying-sheep/rust-rst"
			icon={Settings}
			text="rust-rst"
			sub="reStructuredText parser and renderer in Rust"
		/>
		<ListItemLink
			href="https://github.com/flying-sheep/phil.red"
			icon={Web}
			text="phil.red"
			sub="this website"
		/>
	</>
)

export default function Blog({ match }: RouteComponentProps) {
	return (
		<List>
			<ListItemLink
				href="https://github.com/flying-sheep"
				icon={GitHub}
				text="GitHub"
				sub="flying-sheep"
			/>
			<ListItemLink
				href="https://pypi.org/user/flyingsheep/"
				icon={PythonIcon}
				text="PyPI"
				sub="My Python packages (me=author)"
			/>
			<ListItemLink
				href="https://aur.archlinux.org/packages/?K=flying-sheep&amp;SeB=m"
				icon={ArchIcon}
				text="AUR"
				sub="My Arch Linux packages (me=packager)"
			/>
			<GitHubItems/>
		</List>
	)
}

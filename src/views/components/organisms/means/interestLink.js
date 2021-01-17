import React from 'react';
import { makeStyles, useTheme, Card } from '@material-ui/core/';

//MOLECULES
import InterestLinkControls from '../../molecules/means/interestLinkControls';
import InterestLinkContent from '../../molecules/means/interestLinkContent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "#ffffd4",
    marginTop: 20,
    marginBottom: 20,
    minHeight: '200px',
    maxHeight: '200px',
    minWidth: '200px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  controls: {
    display: 'flex',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    alignSelf: 'flex-end',
    alignItems: "flex-end"
  },
}));

export default function InterestLink(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <div className="row">
        {
          props.links.map(link => (
            <div className={props.width >= 991?"col-4":props.width >= 700?"col-6":"col-12"}>
              <Card className={classes.root}>
                <div className={classes.details}>
                  <InterestLinkContent name={link.name} description={link.description} className={classes.content}/>
                  <InterestLinkControls className={classes.controls} href={link.href}/>
                </div>
              </Card>
            </div>
          ))
        }
      </div>
    </div>
);

}

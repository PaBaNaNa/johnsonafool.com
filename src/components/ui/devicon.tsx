import {
  Docker,
  Fastapi,
  Git,
  Graphql,
  Linux,
  Mongo,
  Mysql,
  Next,
  React,
  Socketio,
  Tailwind,
  Tensorflow,
  Threejs,
} from '~/icons';

interface DeviconProps {
  name?: string;
  icon?: any;
}

export const Devicon = ({ name }: DeviconProps) => {
  return (
    <>
      <p className='m-3 flex bg-slate-50'>
        <Mongo className='m-3 text-7xl' />
        <Mysql className='m-3 text-7xl' />
        <Fastapi className='m-3 text-7xl' />
        <Docker className='m-3 text-7xl' />
        <Linux className='m-3 text-7xl' />
      </p>
      <p className='m-3 flex bg-slate-50'>
        <Git className='m-3 text-7xl' />
        <Threejs className='m-3 text-7xl' />
        <React className='m-3 text-7xl' />
        <Next className='m-3 text-7xl' />
        <Graphql className='m-3 text-7xl' />
      </p>
      <p className='m-3 flex bg-gray-50 '>
        <Tailwind className='m-3 text-7xl' />
        <Socketio className='m-3 text-7xl' />
        <Tensorflow className='m-3 text-7xl' />
      </p>
    </>
  );
};

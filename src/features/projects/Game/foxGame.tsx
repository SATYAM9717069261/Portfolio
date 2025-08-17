import { JSXElement } from 'solid-js';
import LargeDialog from '~/shared/components/windows/LargeDialog';

function FoxGame(): JSXElement {
  return (
    <LargeDialog>
      <div class="flex flex-col items-center justify-center p-8 bg-gradient-to-b from-blue-400 to-green-400 rounded-lg min-h-[400px]">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-white mb-4">🦊 Fox Game</h2>
          <p class="text-white/90 mb-6">A simple fox adventure game!</p>
        </div>

        <div class="bg-white/90 rounded-lg p-6 shadow-lg max-w-md w-full">
          <div class="text-center mb-4">
            <div class="text-6xl mb-2">🦊</div>
            <p class="text-gray-700 mb-4">The fox is ready for adventure!</p>

            <div class="grid grid-cols-3 gap-2 mb-4">
              <button class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-sm">
                ⬅️ Left
              </button>
              <button class="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-sm">
                🦘 Jump
              </button>
              <button class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-sm">
                ➡️ Right
              </button>
            </div>

            <div class="text-sm text-gray-600">
              <p>Score: 0</p>
              <p>Lives: 3 ❤️❤️❤️</p>
            </div>
          </div>

          <div class="text-center">
            <p class="text-xs text-gray-500 italic">Game implementation coming soon...</p>
          </div>
        </div>
      </div>
    </LargeDialog>
  );
}

export default FoxGame;

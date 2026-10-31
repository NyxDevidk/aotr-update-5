/* ---------- Dados ---------- */
const T = (head, rows) => ({ t: 'table', head, rows });
const L = (items, title) => ({ t: 'list', items, title });
const C = (items, title) => ({ t: 'cards', items, title });
const N = (text) => ({ t: 'note', text });
const card = (n, tag, tc, lines, img) => ({ n, tag, tc, lines, img });
const G = (items, title) => ({ t: 'gallery', items, title });

const SECTIONS = [
{ id: 'halloween', cat: 'Evento', title: 'Evento de Halloween', intro: 'Lobbies temáticos, uma moeda nova e cosméticos exclusivos do evento.',
  blocks: [
    L(['Lobby 2D com tema assustador', 'Lobby 3D com tema assustador'], 'Lobbies'),
    G([['halloween-lobby-2d', 'Lobby 2D temático'], ['halloween-lobby-3d', 'Lobby 3D temático']]),
    L(['Nova moeda: Pumpkins (abóboras)', ['Obtida ao matar titãs com abóboras', 'Afetada pelo boost de mapa ativo', 'Também pode ser comprada com Robux']], 'Moeda nova'),
    G([['halloween-shop-pumpkins', 'Pumpkins na loja do evento']]),
    T(['Dificuldade', 'Pumpkins por drop'], [['Easy', '5'], ['Normal', '7'], ['Hard', '10'], ['Severe', '12'], ['Aberrant', '15'], ['Freedom', '20']]),
    L(['Pumpkin titans têm 20.0% de chance de aparecer', 'Golden Pumpkin titans têm 4.0% de chance de aparecer e dão 3x de moeda'], 'Spawn de titãs'),
    G([['halloween-titan-pumpkin', 'Pumpkin titan'], ['halloween-titan-golden-pumpkin', 'Golden Pumpkin titan']]),
    C([
      card('Green Goblin', 'Event', 'var(--c-event)', ['Skin do Attack Titan']),
      card('Frankenstein', 'Event', 'var(--c-event)', ['Skin do Beast Titan']),
      card('Terceiro cosmético', 'Rotativo', 'var(--c-event)', ['Muda a cada rotação do mercado, com um cosmético aleatório da crate temática'])
    ], 'Cosméticos do evento'),
    G([['halloween-shop-cosmetics', 'Cosméticos do evento na loja'], ['halloween-shop-boosts', 'Boosts do evento na loja']]),
    T(['Spooky Crate', 'Raridade'], [
      ['Chainsaw Puppy', 'Mythic'], ['Cap ‘n’ Bells', 'Exclusive'], ['Conical Hat', 'Exclusive'], ['Coulrophobic Blade', 'Exclusive'],
      ['Coulrophobic Gear', 'Exclusive'], ['Coulrophobic Sheath', 'Exclusive'], ['Deathbound Spear Equipment', 'Exclusive'],
      ['Deathbound Spear Gear', 'Exclusive'], ['Dread and Doom', 'Exclusive'], ['Green Skelosaur’s Attire', 'Exclusive'],
      ['Hallowed Horror', 'Exclusive'], ['Jester’s Attire', 'Exclusive'], ['Jester’s Mallet', 'Exclusive'], ['Phantasmal', 'Exclusive'],
      ['Vampiric Wings', 'Exclusive'], ['White Skelosaur’s Attire', 'Exclusive'], ['Wizard’s Attire', 'Exclusive']]),
    G([['halloween-spooky-crate-items', 'Itens da Spooky Crate']])
  ] },

{ id: 'beast', cat: 'Combate', title: 'Beast Titan e Vessels', intro: 'O Beast Titan chega com árvore de skills própria, seis níveis de Resonance e o novo sistema de Vessels para Titans.',
  blocks: [
    C([
      card('Higher Purpose', 'Família', 'var(--c-divine)', ['Passiva de família: Ksaver / Fritz / Reiss']),
      card('Pitching Mastery', 'Passiva', 'var(--accent)', []),
      card('Shifter Mastery', 'Passiva', 'var(--accent)', []),
      card('Boulder Launch', 'Ativa', 'var(--c-mythic)', [], 'beast-skill-boulder-launch'),
      card('Eject', 'Ativa', 'var(--c-mythic)', []),
      card('Perfect Game', 'Ativa', 'var(--c-mythic)', [], 'beast-skill-perfect-game'),
      card('Primal Leap', 'Ativa', 'var(--c-mythic)', [], 'beast-skill-primal-leap'),
      card('Quakeslam', 'Ativa', 'var(--c-mythic)', [], 'beast-skill-quakeslam'),
      card('Royal Cry', 'Ativa', 'var(--c-mythic)', [], 'beast-skill-royal-cry'),
      card('Terraforming Strike', 'Ativa', 'var(--c-mythic)', [], 'beast-skill-terraforming-strike')
    ], 'Skills do Beast Titan'),
    G([['beast-skill-royal-cry-fear', 'Royal Cry com FEAR aplicado nos titãs']]),
    T(['Nível', 'Resonance'], [['R1', 'Constant Evolution'], ['R2', 'Feral Strength'], ['R3', 'Thunderous Icon'], ['R4', 'Primal Instincts'], ['R5', 'Commanding Presence'], ['R6', 'Bloodline Authority']]),
    G([['beast-resonance-r5-commanding-presence', 'R5 · Commanding Presence'], ['beast-resonance-r6-bloodline-authority', 'R6 · Bloodline Authority']]),
    L(['Dão uma opção extra de equipamento exclusiva para Titans', 'Exigem Resonance máxima (R6)', 'Podem ser obtidas por Crafting usando Titan Shards ou Vessels', 'Podem ser obtidas em Raids (Aberrant+)', 'A Vessel equipada também vale em Waves'], 'Como funcionam as Vessels'),
    T(['Crafting', 'Custo'], [['Mythic Vessel', '100 Shards'], ['Divine Vessel', '400 Shards']]),
    C([
      card('Atomic Armageddon', 'Divine', 'var(--c-divine)', ['Agora causa crítico em titãs afetados por BURN', 'O tempo de preparo das skills do Colossal cai 15.0%', 'Anguish agora também afeta você, e o raio de Heatwave aumenta 20.0%', 'Ganho de Awakening Bar multiplicado por 2.00x'], 'beast-vessel-divine-atomic-armageddon'),
      card('Impenetrable Shield', 'Divine', 'var(--c-divine)', ['A cada 10 de Shield Strength: +1.0% de DAMAGE, SKILL CD REDUCTION e MOVEMENT SPEED', 'Com Courage ativo, todo 2º golpe causa 20.0% de BLEED DAMAGE', 'Earth Breaker se divide em vários caminhos', 'Cada golpe recebido conta duas vezes para Warrior’s Brawn, e os bônus dele são multiplicados por 1.20x'], 'beast-vessel-divine-impenetrable-shield'),
      card('Impure Savior', 'Divine', 'var(--c-divine)', ['+20.0% de ganho de Awakening Bar ao acertar titãs com FEAR', 'Quakeslam pode ser usada uma 2ª vez antes do cooldown se acertar 4 ou mais titãs', 'Skills de projétil preparam 15.0% mais rápido e têm 35.0% de chance de serem infecciosas, causando CORROSION por 10s', 'Higher Purpose tem efeitos multiplicados por 1.40x em aliados shifters e agora vale para você'], 'beast-vessel-divine-impure-savior'),
      card('Primordial Devil', 'Divine', 'var(--c-divine)', ['+20.0% de DAMAGE em titãs com BURN', 'Hardening não aumenta mais o Awakening Bar Drain e dá +15.0% de DAMAGE', 'Com Hardening ativo, TODAS as skills acertam até 2 titãs a mais', 'Em Berserk Mode, DAMAGE aumenta 1.5% e SHIFTER PUNCHING SPEED aumenta 0.25% para cada 1.0% de HEALTH perdida'], 'beast-vessel-divine-primordial-devil'),
      card('Scarlet Blossom', 'Divine', 'var(--c-divine)', ['Todo crítico tem +20.0% de SUPER CRIT CHANCE para causar +45.0% de SUPER CRIT DAMAGE', 'Roundhouse Kick causa +75.0% de DAMAGE, o raio aumenta 30.0% e o cooldown cai 10s', 'No estado Crimson Bloom: +25.0% de DAMAGE REDUCTION e -15.0% de Awakening Bar Drain'], 'beast-vessel-divine-scarlet-blossom'),
      card('Brute Force', 'Mythic', 'var(--c-mythic)', ['Ataques pesados não têm endlag', 'Ataques pesados causam +25.0% de DAMAGE e +25.0% de CRIT DAMAGE', 'Ataques pesados fazem bosses soltarem jogadores agarrados'], 'beast-vessel-mythic-brute-force'),
      card('Counter Guard', 'Mythic', 'var(--c-mythic)', ['Dá para bloquear durante o endlag de soco ou ataque pesado', 'Ao bloquear, entra em estado de parry por 0.5s', 'Parries bem-sucedidos dão +20.0% DAMAGE, +15.0% CRIT DAMAGE e +10.0% CRIT CHANCE nos próximos 3 golpes e resetam o cooldown do Block'], 'beast-vessel-mythic-counter-guard'),
      card('Noxious Blood', 'Mythic', 'var(--c-mythic)', ['Titãs que acertam você recebem CORROSION por 5s', 'Acertar um titã com CORROSION recupera 3.0% de HEALTH'], 'beast-vessel-mythic-noxious-blood'),
      card('Pugilist', 'Mythic', 'var(--c-mythic)', ['Socos não têm endlag', 'Socos causam +45.0% de DAMAGE e ganham +20.0% de SHIFTER PUNCHING SPEED', 'Block Bar é 25.0% mais eficaz', 'TODAS as skills ativas de shifter ficam desativadas'], 'beast-vessel-mythic-pugilist'),
      card('Thunderous Attunement', 'Mythic', 'var(--c-mythic)', ['Críticos dão +15.0% de ganho de Awakening Bar, aumentam SHIFTER PUNCHING SPEED em 10.0% por 5s e têm 15.0% de chance de causar SHOCK por 3s', 'SHOCK pode afetar bosses enquanto não estiverem usando skill (não acumula)'], 'beast-vessel-mythic-thunderous-attunement'),
      card('Void’s Call', 'Mythic', 'var(--c-mythic)', ['Roar causa FEAR em titãs por 15s', 'Bosses afetados têm a maioria das skills desativadas e não regeneram HEALTH até o efeito acabar'], 'beast-vessel-mythic-voids-call')
    ], 'Vessels Divine e Mythic')
  ] },

{ id: 'status', cat: 'Combate', title: 'Efeitos de status', intro: 'Todos os efeitos abaixo acumulam entre si.',
  blocks: [
    T(['Efeito', 'O que faz'], [
      ['BURN', 'Incendeia o titã, causando dano rápido por pouco tempo'],
      ['BLEED', 'Abre um ferimento profundo, causando dano lento por muito tempo'],
      ['CORROSION', 'Corrói as defesas do titã e aumenta em 20.0% o dano que ele recebe'],
      ['EXPLOSION DAMAGE REDUCTION', 'Titãs recebem 15.0% menos dano de acertos de Thunder Spear (bosses já tinham isso desde o Update 4)'],
      ['FEAR', 'Reduz o dano e a velocidade de ataque do titã em 15.0%'],
      ['SHOCK', 'Deixa um titã que não é boss imóvel por um tempo']
    ])
  ] },

{ id: 'battlepass', cat: 'Progressão', title: 'Battlepass da Season 4', intro: 'Mais tiers, dez semanas de quests novas e cosméticos inéditos.',
  blocks: [
    L(['200 tiers', 'Pode ir até o Tier 1,000, e cada 10 tiers dão 750 Gems', '10 semanas de quests novas do Battlepass'], 'Resumo'),
    L(['Crates', 'Emperor Keys', 'Gems', 'Gold', 'Lucky Spins', 'Memory Scrolls', 'Potions', 'Spins'], 'Variedade de recompensas nos tiers 1 a 100'),
    T(['Cosmético', 'Tier', 'Tipo'], [
      ['Kitsune ODM Set', '25', 'Free'], ['Kitsune TS Set', '25', 'Premium'], ['Phoenix ODM Set', '50', 'Free'], ['Phoenix TS Set', '50', 'Premium'],
      ['Wendigo', '75', 'Premium'], ['Cthulhu', '100', 'Premium']]),
    G([['battlepass-kitsune-odm-set', 'Kitsune ODM Set · Tier 25 (Free)'], ['battlepass-kitsune-ts-set', 'Kitsune TS Set · Tier 25 (Premium)'], ['battlepass-phoenix-odm-set', 'Phoenix ODM Set · Tier 50 (Free)'], ['battlepass-phoenix-ts-set', 'Phoenix TS Set · Tier 50 (Premium)'], ['battlepass-wendigo', 'Wendigo · Tier 75 (Premium)'], ['battlepass-cthulhu', 'Cthulhu · Tier 100 (Premium)']], 'Cosméticos do Battlepass'),
    T(['Conquista sazonal', 'Tier', 'Tipo'], [
      ['Drowned Prophet', '125', 'Premium'], ['Divine Child', '150', 'Premium'], ['Primordial One', '175', 'Premium'], ['World Eater', '200', 'Premium']]),
    G([['battlepass-achievement-drowned-prophet', 'Drowned Prophet · Tier 125'], ['battlepass-achievement-divine-child', 'Divine Child · Tier 150'], ['battlepass-achievement-primordial-one', 'Primordial One · Tier 175'], ['battlepass-achievement-world-eater', 'World Eater · Tier 200']], 'Conquistas sazonais')
  ] },

{ id: 'skilltree', cat: 'Progressão', title: 'Árvore de habilidades', intro: 'Capstones ficam no fim de cada caminho. Memórias Legendary são memórias de 5 estrelas.',
  blocks: [
    C([
      card('Offense Capstone', '20 SP', 'var(--c-mythic)', ['O slot de perk de Offense passa a aceitar Divine Perks', 'Permite obter Legendary Offense Memories ao rolar']),
      card('Defense Capstone', '20 SP', 'var(--accent)', ['O slot de perk de Defense passa a aceitar Divine Perks', 'Permite obter Legendary Defense Memories ao rolar']),
      card('Support Capstone', '20 SP', 'var(--c-exclusive)', ['O slot de perk de Support passa a aceitar Divine Perks', 'Permite obter Legendary Support Memories ao rolar'])
    ])
  ] },

{ id: 'perks', cat: 'Combate', title: 'Perks novos', intro: 'Dois perks Legendary e Mythic de Cannon e dez Divine Perks. Valores com intervalo (ex.: 20.0% - 35.0%) mostram o mínimo e o máximo da rolagem.',
  blocks: [
    C([
      card('Bombardier', 'Legendary · Offense', 'var(--c-legendary)', ['Cannon DAMAGE +15.0% - 25.0%', 'Cannon AOE +7.5% - 12.5%', 'Cannon COOLDOWN -5.0% - 7.5%']),
      card('Blitzkrieg', 'Mythic · Offense', 'var(--c-mythic)', ['Cannon DAMAGE +25.0% - 40.0%', 'Cannon AOE +12.5% - 20.0%', 'Cannon COOLDOWN -10.0% - 15.0%', 'CANNON SHOTS causam BURN ao acertar'])
    ], 'Legendary e Mythic'),
    L(['O slot de Body aceita Divine Perks (sem restrições)', 'Os Capstone Upgrades permitem que o slot de perk correspondente aceite Divine Perks', 'Os slots de perk de Family NÃO aceitam Divine Perks (única exceção: o slot extra de Body Perk do Shiki)', 'Só podem ser criados com divine fragments, e os fragments usados definem o tipo de perk obtido'], 'Regras dos Divine Perks'),
    C([
      card('Mankind’s Strongest', 'Divine · Body', 'var(--c-divine)', ['HOOK SPEED +30.0% - 40.0%', 'TODOS os stats de ODM +20.0% - 35.0%', 'Causa DAMAGE máximo enquanto tiver 45.0% - 20.0% do SPEED máximo', 'A cada 3 críticos, recupera 10.0% - 15.0% de BLADE DURABILITY', 'A cada 10s, alterna entre +10.0% - 15.0% de DAMAGE / CRIT DAMAGE', 'Todo golpe com ODM causa 15.0% - 30.0% de BLEED DAMAGE']),
      card('Sanguine Destroyer', 'Divine · Body', 'var(--c-divine)', ['CONSERVE CHANCE +10.0% - 15.0%', 'SPEAR COUNT +4 - 8', 'TODOS os stats de TS +20.0% - 35.0%', 'Explosões causam 30.0% - 40.0% menos self DAMAGE', 'Spears não têm mais recuo ao disparar', 'Todo golpe com TS causa CORROSION']),
      card('Avatar of Ymir', 'Divine · Body', 'var(--c-divine)', ['Permite shiftar com 60.0% de Awakening Bar', 'Máximo de shifts +4 - 7', 'Awakening Bar enche 35.0% - 55.0% mais rápido', 'Aggro range +175m - 250m', 'TODOS os stats de TITAN +20.0% - 35.0%', 'Shiftar causa 30.0% - 55.0% de DAMAGE a titãs na área', 'A cada 3 golpes na forma de titã, causa FEAR']),
      card('Godforged', 'Divine · Offense', 'var(--c-divine)', ['DAMAGE de ODM/TS +45.0% - 65.0%', 'BLADE DURABILITY +25.0% - 40.0% e CONSERVE CHANCE +6.25% - 10.0%', 'CRIT CHANCE +15.0% - 20.0%', 'CRIT DAMAGE +30.0% - 50.0%', 'Acerta 3 - 6 membros a mais de uma vez (3 com TS)', 'Cada golpe aumenta DAMAGE/CRIT DAMAGE em 5.0% - 6.0%, até 5 stacks, resetando após 5s sem acertar']),
      card('Stormwrath', 'Divine · Offense', 'var(--c-divine)', ['SKILL CD REDUCTION +20.0% - 30.0%', 'SHIFTER DAMAGE +50.0% - 65.0%', 'PUNCHING SPEED +15.0% - 25.0%', 'TODOS os stats de TITAN +15.0% - 25.0% por 20s após shiftar', 'Usar uma skill dá 10.0% - 20.0% de DAMAGE por 5s']),
      card('Eternal', 'Divine · Defense', 'var(--c-divine)', ['HEALTH +150 - 200', 'DAMAGE REDUCTION +35.0% - 45.0%', 'INJURY CHANCE -25.0% - 40.0%', 'Escapa de agarrões com 1 - 2 inputs a menos', 'Ignora 1 golpe fatal ao custo de 35.0% - 25.0% do Awakening Bar', 'Ser atingido dá +5.0% - 25.0% de DAMAGE no próximo golpe, acumulando até 50.0% - 100.0%']),
      card('Foresight', 'Divine · Defense', 'var(--c-divine)', ['Ignora até 4 - 6 injuries', 'Escapa de agarrões automaticamente', '10.0% - 20.0% de chance de esquivar de um ataque', 'Skills perdem os I-Frames, mas causam 20.0% - 35.0% mais DAMAGE, dão imunidade a knockback e 15.0% - 30.0% de DAMAGE RESISTANCE enquanto usadas', 'Receber um golpe fatal durante uma skill não mata você']),
      card('Branching Paths', 'Divine · Support', 'var(--c-divine)', ['TODOS os membros do grupo têm 4.0% - 8.0% de chance de recuperar 1 segmento de lâmina/spear por kill', 'DAMAGE de TODOS do grupo +0.3% - 0.5% por kill, até 30.0%', 'Gas Bar de TODOS do grupo +2.5% - 4.0% por kill', 'HEALTH de TODOS do grupo +2.0% - 3.0% por kill', 'Você vê o contorno de todos os titãs']),
      card('Wings of Freedom', 'Divine · Support', 'var(--c-divine)', ['ODM/TS GAS +20.0% - 30.0%', 'ODM/TS SPEED +25.0% - 35.0%', 'ODM/TS CONTROL +30.0% - 40.0%', 'ODM/TS RANGE +30.0% - 40.0%', 'TODOS os stats de ODM/TS +10.0% - 15.0%', 'Dashes têm 15.0% mais velocidade, atravessam titãs e dão I-Frames', 'Boost Dash +1 e dashar consome 25.0% menos gás']),
      card('15th Commander', 'Divine · Support', 'var(--c-divine)', ['Stats de ODM/TS dos aliados +5.0% - 10.0% quando afetados por suas orders', 'Flares e orders têm o cooldown cortado pela metade e efeitos multiplicados por 1.60x - 2.00x', 'Flares fazem titãs soltarem jogadores agarrados, marcam 5 - 10 titãs a mais e causam FEAR', 'Orders podem ser usadas no ar', 'Flares e orders cobrem o mapa inteiro'])
    ], 'Divine Perks')
  ] },

{ id: 'memories', cat: 'Combate', title: 'Memórias novas', intro: 'Oito memórias Legendary, distribuídas entre Core, Offense, Defense e Support.',
  blocks: [
    C([
      card('Blood Awakening', 'Legendary · Core', 'var(--c-legendary)', ['Começa com o Awakening Bar cheio', 'Awakening dura 90s', 'Em Awakening: +50.0% DAMAGE e +30.0% DAMAGE RESISTANCE, mas o ganho de Awakening Bar é 75.0% mais lento']),
      card('Elementalist', 'Legendary · Core', 'var(--c-legendary)', ['TODOS os efeitos de status ficam fortalecidos', 'BURN: 25.0% de chance de virar INFERNO, com +50.0% de DAMAGE', 'BLEED: tempo de regeneração de membros +15s (afeta bosses)', 'CORROSION: potência +35.0%', 'FEAR: titãs ficam com +20.0% de vulnerabilidade a críticos', 'SHOCK: causa 70.0% de DAMAGE ao titã afetado']),
      card('Sparks of Black', 'Legendary · Offense', 'var(--c-legendary)', ['+20.0% de SUPER CRIT CHANCE e +40.0% de SUPER CRIT DAMAGE', 'Super Crits reduzem o cooldown de skills em 3s e causam 20.0% de BLEED DAMAGE']),
      card('Shatterpoint', 'Legendary · Offense', 'var(--c-legendary)', ['Golpes seguidos no mesmo membro aumentam o DAMAGE recebido por ele em 15.0%, até +75.0% (reseta após 5s sem acertar)', 'No limite, o próximo golpe é Super Crit garantido e causa DAMAGE máximo']),
      card('Living Legend', 'Legendary · Defense', 'var(--c-legendary)', ['HEALTH multiplicada por 1.25x', 'Imune a injuries', 'Efeitos de status nocivos são 30.0% menos eficazes em você', 'Efeitos de order são 30.0% mais eficazes em você', 'Cura recebida +35.0%']),
      card('Untouchable', 'Legendary · Defense', 'var(--c-legendary)', ['Cada segundo sem tomar DAMAGE dá +2.0% de TODOS os stats e +3.0% de SHIELD, acumulando até 10s', 'A cada 25 de SHIELD perdidos, causa 20.0% de DAMAGE a titãs próximos e aplica CORROSION', 'Você toma 1.50x mais DAMAGE']),
      card('Overclocked', 'Legendary · Support', 'var(--c-legendary)', ['Cada hook causa até 100.0% de DAMAGE', 'Cada hook seguido dá +3.0% de DAMAGE de ODM/TS e +6.0% de SPEED de ODM/TS, até 15 vezes (reseta ao tocar o chão)']),
      card('Divine Decree', 'Legendary · Support', 'var(--c-legendary)', ['Efeitos de flares e orders multiplicados por 1.40x e dão +15.0% de SHIELD a TODOS os aliados', 'Usar um flare ativa TODOS os outros flares equipados de uma vez', 'Usar uma order ativa TODAS as outras orders equipadas de uma vez'])
    ])
  ] },

{ id: 'freedom', cat: 'Combate', title: 'Dificuldade Freedom', intro: 'A nova dificuldade mais alta do jogo, com modificadores permanentes e drops de divine fragments e vessels.',
  blocks: [
    L(['Exige Prestige 3+ e Grade S-'], 'Requisitos'),
    L(['Nightmare', 'Evolution', 'Fatigue'], 'Modificadores permanentes (não podem ser desativados)'),
    L(['Boring', 'Simple', 'Primitive'], 'Modificadores mais fáceis (não podem ser ativados)'),
    L(['Todo titã tem EXPLOSION DAMAGE REDUCTION', 'Começa no modo Waves, na wave 81', 'Bosses têm os efeitos da divine vessel equivalente', 'Divine fragments e vessels dropam nesta dificuldade', 'As taxas de drop são cerca de 3.00x maiores que em Aberrant'], 'Regras'),
    C([card('Variante “Ogre”', 'Nova', 'var(--c-mythic)', ['Pode aparecer em Aberrant se o modificador “Evolution” estiver ativo', '+15.0% de Damage, +20.0% de Health e +10.0% de Walk Speed', 'Skill 1: “Shatterclap”', 'Skill 2: “Steam Release”'], 'freedom-variant-ogre')])
  ] },

{ id: 'market', cat: 'Economia', title: 'Mercado, moedas e recompensas', intro: 'Novos bundles, moedas, cosméticos, gamepasses e recompensas diárias.',
  blocks: [
    L(['Novos bundles', 'Novo item de progressão: Beast Shard'], 'Mercado'),
    G([['market-bundles-update-5', 'Novos bundles do Update 5'], ['market-progression-beast-shard', 'Beast Shard']]),
    L(['Devem rodar bem melhor para quem tinha dificuldade de manter FPS estável', 'Mais animações de Idle, Walk e Run', 'Variantes de cabeça: 5', 'Variantes de cabelo: 18', 'Variantes de corpo: 4'], 'Novos modelos de titã'),
    T(['Corpo', 'Efeito'], [
      ['Skinny', '-10.0% Damage, -15.0% Health, +15.0% Walk Speed'],
      ['Buff', '+15.0% Damage, +15.0% Health'],
      ['Fat', '-15.0% Walk Speed, -10.0% Animation Speed, +10.0% Damage, +20.0% Health'],
      ['Average', 'Sem mudanças']]),
    G([['market-titan-body-variants', 'Variantes de corpo dos titãs']]),
    L(['Converta 50 “Spins” normais em 1 “Lucky Spin” no menu de Customização', 'Pity Legendary+ aos 100 Lucky Spins', 'Pode ser comprada com Robux'], 'Moeda nova: Lucky Spins'),
    G([['market-lucky-spins-shop', 'Lucky Spins na loja'], ['market-lucky-spins-convert', 'Conversão de Spins em Lucky Spins'], ['market-lucky-spins-rates', 'Chances de cada raridade'], ['market-lucky-spins-pity', 'Pity de Legendary+']]),
    L(['Ganha-se ao comprar itens no jogo com Robux', 'Taxa de 1 Token para cada 1 Robux', 'Pode ser trocada por Gems, Gold, Shards e Lucky Spins'], 'Moeda nova: Tokens'),
    G([['market-tokens-exchange', 'Troca de Tokens']]),
    T(['Raridade', 'Preço em Shards'], [['Common', '69'], ['Uncommon', '279'], ['Rare', '559'], ['Epic', '2,799'], ['Legendary', '10,499'], ['Mythic', '34,999']]),
    N('A seleção de cosméticos comprados com Shards atualiza a cada 6 horas.'),
    G([['market-shard-cosmetics-1', 'Cosméticos por Shards (1)'], ['market-shard-cosmetics-2', 'Cosméticos por Shards (2)'], ['market-shard-cosmetics-3', 'Cosméticos por Shards (3)'], ['market-shard-cosmetics-4', 'Cosméticos por Shards (4)']]),
    L(['Entre todo dia para resgatar uma recompensa de Gold, Gems ou Shards', 'O valor escala com seu Prestige e sua sequência de login'], 'Recompensas diárias'),
    G([['market-daily-rewards', 'Tela de recompensas diárias']]),
    T(['Sequência', 'Recompensa', 'Tipo'], [
      ['Dia 70', 'Beater', 'Título'], ['Dia 140', 'Kirito’s Attire', 'Outfit'], ['Dia 210', 'Asuna’s Attire', 'Outfit'], ['Dia 280', 'Dual Wield', 'Acessório'], ['Dia 350', 'Game Master', 'Skin de Titan']]),
    G([['market-daily-streak-beater', 'Dia 70 · Beater'], ['market-daily-streak-kiritos-attire', 'Dia 140 · Kirito’s Attire'], ['market-daily-streak-asunas-attire', 'Dia 210 · Asuna’s Attire'], ['market-daily-streak-dual-wield', 'Dia 280 · Dual Wield'], ['market-daily-streak-game-master', 'Dia 350 · Game Master']]),
    C([
      card('VIP', 'Gamepass', 'var(--c-premium)', ['Ícone e título de VIP', '-25.0% de Trade Tax (ao receber itens)', '5.0% de Multiplier Boost', '3 Quests Diárias/Semanais', 'Proteção de 24H da sequência de recompensa diária'], 'market-gamepass-vip'),
      card('Ymir’s Blessing', 'Gamepass', 'var(--c-premium)', ['Dá automaticamente os benefícios de todos os Gamepasses atuais e futuros', 'Transforma em item de inventário qualquer Gamepass que você já tenha no jogo'], 'market-gamepass-ymirs-blessing')
    ], 'Novos Gamepasses'),
    L(['Slime Pal: em qualquer missão (Aberrant+), substitui o cosmético “Angel’s Halo”'], 'Novo cosmético de missão'),
    G([['market-mission-cosmetic-slime-pal', 'Slime Pal']]),
    T(['Recompensa de leaderboard (julho 2026+)', 'Posições'], [['Harugon', '1 - 3'], ['Bearer of Worlds', '4 - 10'], ['Ultra Instinct', '11 - 25']]),
    G([['market-leaderboard-harugon', 'Harugon · posições 1 a 3'], ['market-leaderboard-bearer-of-worlds', 'Bearer of Worlds · posições 4 a 10'], ['market-leaderboard-ultra-instinct', 'Ultra Instinct · posições 11 a 25']]),
    N('Todas as recompensas de leaderboard de janeiro a julho de 2026 já foram entregues no jogo. Quem não recebeu deve abrir um ticket no servidor de Discord da Power Interactive, pois todos os jogadores são verificados manualmente.'),
    L(['NÃO aparecem no console por enquanto (fora do controle da equipe)', 'Immersive: aparecem pelos lobbies e seguem seu personagem', 'Rewarded: podem ser resgatados 15 vezes por dia, e o timer de reset é de 24 horas APÓS o resgate', 'Rewarded: podem dar x2 de Spin Luck no próximo spin (sem cooldown)', 'Rewarded: podem dar uma Potion aleatória (cooldown de 4H)'], 'Tipos de anúncio'),
    G([['market-ads-immersive', 'Anúncio Immersive'], ['market-ads-rewarded-spin-luck', 'Rewarded: x2 de Spin Luck'], ['market-ads-rewarded-potion', 'Rewarded: Potion aleatória']])
  ] },

{ id: 'modifiers', cat: 'Economia', title: 'Modificadores e Waves', intro: 'Modificadores novos para missões, raids e para o modo Waves.',
  blocks: [
    T(['Missão / Raid', 'Efeito'], [
      ['Fatigue', '+10.0% de Gold/XP, mas Awakening e cooldowns 30.0% mais lentos'],
      ['Evolution', '+15.0% de Gold/XP, mas todos os abnormals são variantes'],
      ['Primitive', '-15.0% de Gold/XP, mas nenhum abnormal é variante']], ),
    T(['Waves', 'Efeito'], [
      ['Inflation', '+10.0% de Shards, mas +15.0% de custo nos upgrades do HQ'],
      ['Merchant’s Greed', '+10.0% de Shards, mas +10.0% de custo no Market'],
      ['Unworthy', '+10.0% de Shards, mas +12.5% de custo de Blessing e +5.0% de rolagens falhas'],
      ['Shortage', '+10.0% de Shards, mas Skill Crates mais escassas e sem marcação'],
      ['Juggernaut', '+20.0% de Shards, mas bosses têm +15.0% de stats'],
      ['Tipping Point', '+15.0% de Shards, mas +15.0% de escalonamento por wave']]),
    L(['Tem 25.0% de chance de aparecer após matar qualquer boss (temporário até o boss ser adicionado no Update 6)'], 'Beast Serum / Shard'),
    G([['modifiers-beast-serum-shard', 'Beast Serum / Shard']])
  ] },

{ id: 'balance', cat: 'Balanceamento', title: 'Balanceamento geral', intro: 'Mudanças em economia, trading, gifting, skills e perks. Setas mostram o valor antigo e o novo.',
  blocks: [
    L([
      'Stat “Swing Duration” agora é “Swing Speed” (você ataca mais rápido)',
      'Removido o buff de I-Frames da variante de titã “Leader”',
      'Bundles de Robux com “Gems” / “Gold” agora escalam com seu Prestige',
      'Aumentada a velocidade dos barcos no “Armored Raid” (Severe+)',
      'Bosses agora levam 4x mais tempo para destruir muros (exceto o boss “Colossal”)',
      'Revisão de como Gems são dadas: multiplicadores não são mais multiplicativos, agora somam como o resto do jogo',
      'Gems por level up: ((Prestige + 1) * 25) → ((Prestige + 1) * 10)',
      'Removida a sinergia da memória “Gambler” com o perk “Perfect Form”',
      'Perk “Maximum Firepower”: TODOS os stats de TS aumentam [5.0% → 7.5%] a [10.0% → 15.0%]',
      'Removidos os limites de Daily Gift',
      'Trade Tax reduzida em 20.0%'], 'Geral'),
    T(['Requisito de Prestige para trade', 'Mudança'], [['Perks / Artifacts', '2 → 1'], ['Serums', '3 → 2']]),
    L(['Conta High Verified', 'Conta com 30 dias ou mais', 'Trusted Device'], 'Novos requisitos de gifting'),
    L(['Conta High Verified', 'Conta com 90 dias ou mais', 'Trusted Device'], 'Novos requisitos de trading'),
    T(['Skill', 'Mudança'], [
      ['Blade Dance', 'Cooldown 20s → 25s'], ['Drill Thrust', 'DAMAGE 0.65x → 0.20x'], ['Torrential Steel', 'DAMAGE 0.80x → 0.30x'],
      ['Let It RIP', 'DAMAGE 1.00x → 0.50x (0.65x com Shiki)'], ['Hellfire Barrage', 'DAMAGE 1.30x → 1.00x'], ['Meteoric Rain', 'DAMAGE 1.30x → 1.00x'],
      ['Emergency Relocation', 'Cooldown 105s → 55s'], ['Conquer', 'Limite de marcação de 25 titãs'],
      ['Thunder Barrage', 'DAMAGE 1.15x → 1.00x (1.15x com Shiki)'], ['Chaos', 'Revertido o nerf de hitbox no objetivo “Defend”']])
  ] },

{ id: 'shifters', cat: 'Balanceamento', title: 'Shifters e famílias', intro: 'Ajustes por tipo de Shifter, bônus de família e mudanças gerais de maestria.',
  blocks: [
    L(['Shifters não recebem mais Awakening Bar se deveriam receber algum quando a barra chega a 0', 'Ganho de Mastery XP aumentado'], 'Geral'),
    T(['Attack', 'Mudança'], [
      ['Shifter Mastery', 'HEALTH [BASE 200 → 175, INCREASE 20 → 14], REGEN [BASE 10 → 10.5, INCREASE 0.5 → 0.7]'],
      ['Roar', 'HEALTH [INCREASE 0.4% → 0.3%], DAMAGE [BASE 5.0% → 10.0%, INCREASE 0.5% → 1.0%]'],
      ['Corkscrew Punch', 'DAMAGE [BASE 80.0% → 105.0%, INCREASE 9.0% → 10.0%], corpos agora fazem ragdoll no impacto'],
      ['Brutal Stomp', 'DAMAGE [BASE 70.0% → 100.0%, INCREASE 5.5% → 6.0%]'],
      ['Uppercut', 'DAMAGE [BASE 40.0% → 50.0%, INCREASE 3.0% → 3.5%]'],
      ['Berserk Mode', 'DAMAGE [BASE 10.0% → 20.0%, INCREASE 1.0% → 2.0%]'],
      ['Eject', 'CHANCE [BASE 23.0% → 7.0%, INCREASE 4.0% → 2.1%], HEALTH [BASE 2.5% → 1.4%, INCREASE 1.0% → 0.7%]'],
      ['R6', 'Agora vale também para M1s']]),
    T(['Armored', 'Mudança'], [
      ['Shifter Mastery', 'BAR [BASE 1.9% → 2.1%, INCREASE -0.05% → -0.04%], HEALTH [BASE 300 → 250, INCREASE 30 → 20], REGEN [BASE 10 → 15, INCREASE 0.75 → 1]'],
      ['Roar', 'HEALTH [BASE 3.0% → 4.0%], DAMAGE [BASE 7.5% → 10.0%, INCREASE 0.5% → 1.0%]'],
      ['Titan Toss', 'Causa dano só no impacto, DAMAGE [BASE 40.0% → 120.0%, INCREASE 5.5% → 15.0%]'],
      ['Eject', 'CHANCE [BASE 11.0% → 10.0%], HEALTH [BASE 4.0% → 2.0%, INCREASE 1.5% → 1.0%]']]),
    T(['Female', 'Mudança'], [
      ['Shifter Mastery', 'BAR [BASE 2.0% → 2.3%, INCREASE -0.05% → -0.03%], HEALTH [INCREASE 12.5 → 10], REGEN [INCREASE 0.4 → 0.5], SIZE [BASE 13m → 12.5m, INCREASE 0.2m → 0.15m]'],
      ['Shriek', 'HEALTH [INCREASE 0.3% → 0.2%], DAMAGE [BASE 5.0% → 10.0%, INCREASE 1.1% → 1.0%]'],
      ['Crimson Bloom', 'DAMAGE [BASE 6.0% → 3.0%, INCREASE 0.75% → 0.25%]'],
      ['Eject', 'CHANCE [BASE 11.0% → 5.0%, INCREASE 3.0% → 1.5%]'],
      ['Attack Mimicry', 'DAMAGE [INCREASE 0.8% → 1.0%]'],
      ['Armored Mimicry', 'DAMAGE REDUCTION [BASE 5.0% → 10.0%, INCREASE 0.8% → 1.0%]']]),
    T(['Colossal', 'Mudança'], [
      ['Shifter Mastery', 'BAR [BASE 2.2% → 2.5%, INCREASE -0.05% → -0.02%], HEALTH [BASE 1,000 → 500, INCREASE 100 → 40], REGEN [INCREASE 3 → 2]'],
      ['Atomic Ascension', 'DAMAGE [BASE 1500.0% → 1650.0%, INCREASE 150.0% → 165.0%]'],
      ['Heatwave', 'Os ticks do R5 agora causam 0.50x de DAMAGE e param em 25 ticks antes de ir para cooldown'],
      ['Anguish', 'Agora é afetada pela blessing “Leadership Training” e pela memória “Tactician”'],
      ['Eject', 'CHANCE [BASE 35.0% → 20.0%, INCREASE 5.0% → 6.0%], HEALTH [BASE 9.0% → 4.0%]']]),
    T(['Família', 'Bônus'], [
      ['Yeager', '+15.0% de Damage [ATTACK RAID], +20.0% de stats do Beast Titan'],
      ['Braun', '+10.0% de Damage [ARMORED RAID]'],
      ['Leonhart', '+10.0% de Damage [FEMALE RAID]'],
      ['Arlert', '+10.0% de Damage [COLOSSAL RAID]']])
  ] },

{ id: 'rewards', cat: 'Balanceamento', title: 'Quests, missões e bosses', intro: 'Recompensas de Gems, sequência de missões, AFK Zone e stats dos bosses de raid.',
  blocks: [
    L(['Maior variedade de Daily / Weekly Quests sorteáveis', 'Cada Daily Quest: 75 Gems → 250 Gems (as de VIP dão 200 Gems)', 'Cada Weekly Quest: 225 Gems → 1,000 Gems (as de VIP dão 800 Gems)'], 'Quests'),
    T(['Dificuldade', 'Streak para Gems: BASE', 'Streak para Gems: MAX'], [
      ['Easy', 'N/A → 5', 'N/A → 10'], ['Normal', 'N/A → 10', 'N/A → 20'], ['Hard', '10 → 20', '25 → 40'],
      ['Severe', '25 → 40', '50 → 65'], ['Aberrant', '50 → 65', '75 → 95'], ['Freedom', '95', '130']]),
    L(['Streak necessária para Gems: a cada 50 → a cada 100', 'Aumento de Gems por streak: de 50 por streak → interpolação linear entre BASE e MAX da dificuldade escolhida (até 10,000 de streak)', 'Aumento de Gems por Prestige: (Prestige * 25) → (Prestige * 10)'], 'Missões'),
    L(['Gold ganho: 1.00x → 2.00x', 'Base de Gems: 25 → Streak mais alta da dificuldade para Gems (BASE / 4)', 'Aumento de Gems por Prestige: (Prestige * 10) → (Prestige * 5)'], 'AFK Zone'),
    N('Bosses de raid agora têm stats variados, usando o stat base da dificuldade como referência.'),
    T(['Boss', 'Stats'], [
      ['Attack Titan', 'Nape Health x1.15, Walk Speed x1.10'],
      ['Armored Titan', 'Nape Health x1.40, Walk Speed x1.00, Courage [Walk Speed x1.30], Unstoppable Charge [anda com Walk Speed x3.00], Courage [Shield HP x0.50 → x0.30]'],
      ['Female Titan', 'Nape Health x1.00, Walk Speed x1.25'],
      ['Colossal Titan', 'Nape Health x3.00, Walk Speed x0.40']])
  ] },

{ id: 'qol', cat: 'Qualidade de vida', title: 'Qualidade de vida', intro: 'Melhorias de interface, lobbies, trading, loadouts e configurações.',
  blocks: [
    L([
      'Removidas as colisões de caixa das árvores grandes nos mapas “Forest” / “Outskirts” / “Utgard”',
      'Memória “Gem Fiend” removida do modo “Waves”',
      'Limite da moeda “Silver” no modo “Waves” aumentado de 10,000 para 100,000',
      'Ver e editar loadout agora mostra os itens que você TINHA ao usar o loadout, mesmo que não estejam mais no inventário (family/cosméticos)',
      'Restaurada a thumbnail “Eren Boulder” no jogo',
      'Lobby da Title Screen aumentado de 20 → 30',
      'Lobby de Town/Trade Central aumentado de 25 → 30',
      'Outfits agora podem ser equipados separadamente no lobby (Shirt / Pants)',
      'Acessórios agora podem ser equipados separadamente no lobby (1 / 2 / 3)',
      'Todos os displays acima da cabeça dos jogadores agora ficam sempre na frente de qualquer objeto',
      'VFX diferentes para cada skin de Shifter “Female” com a skill “Crimson Bloom”',
      'Novos modelos de serum',
      'Raridade “Legendary” adicionada à seleção automática de Artifacts/Perks',
      'Agora dá para escolher quantos itens usar em crafting/enhancing quando a quantidade é maior que 1',
      'Agora dá para escolher quantos itens colocar numa trade quando a quantidade é maior que 1',
      'Removido o limite máximo de stack em trades (era 100)',
      'Toda sexta, sábado e domingo, um Raid aleatório ganha 20.0% de boost de luck o dia inteiro',
      'Jogadores com o mesmo valor no leaderboard agora dividem o mesmo rank',
      'Modificadores que se contradizem (como “Simple” e “Oddball”) agora desativam um ao outro na tela de seleção',
      'Raridade “Mythic” adicionada à configuração “Auto Sell” para Artifacts/Perks',
      'Leve revisão da interface de display de memórias',
      'Nova configuração “Roll Protection”: define quais raridades de Family pedem confirmação ao serem rerrolladas',
      'Segundo aviso ao deletar/rolar uma family de raridade Legendary+',
      'Nova configuração “Low Detail”: remove certos efeitos para reduzir a carga em dispositivos menos potentes (será ajustada com sugestões dos jogadores)',
      'Auras “Ad Astra” e “Vulcan’s Grace” voltaram à versão original',
      'Gamepasses comprados pela Roblox Store agora viram item de inventário no seu slot equipado se você já os resgatou no jogo pelo Market (uma vez só)',
      'Title Screen otimizada (antes carregava TODOS os cabelos de TODOS os jogadores com o Gamepass “Advanced Customization”)',
      'Slots do Gamepass “Loadouts”: 3 → 5',
      'Mesh VFX adicionados a algumas skills de Shifter',
      'Marcadores de cabeça dos titãs substituídos',
      'Efeitos de status agora aparecem no marcador de cabeça do titã',
      'Efeitos de status ficam destacados como texto e podem ser clicados em Town/Trade Central para ver o que fazem',
      'Botão de luck na tela de missões/raids para ver suas chances com e sem Luck Potion ativa',
      'Titans/Shifters de jogadores não colidem mais com portable resupply stations',
      'Taxas de memórias agora aparecem no inventário, nos itens correspondentes',
      'Titan Shards agora podem ser vendidos (equivalem a um cosmético Legendary do Raid correspondente)'], 'Mudanças gerais'),
    G([['qol-aura-ad-astra', 'Aura Ad Astra (versão original)'], ['qol-aura-vulcans-grace', 'Aura Vulcan’s Grace (versão original)'], ['qol-leaderboard-shared-rank', 'Mesmo valor, mesmo rank no leaderboard'], ['qol-memory-rates', 'Taxas de memórias no inventário'], ['qol-quantity-selector-crafting', 'Quantidade em crafting e enhancing'], ['qol-quantity-selector-trade', 'Quantidade em trades'], ['qol-raid-luck-boost', 'Boost de luck em Raid'], ['qol-roll-protection', 'Roll Protection']], 'Capturas'),
    L(['Converta Gold em até 50,000 Gems uma vez por semana (exige Prestige 5)'], 'Conversão de Gold para Gem'),
    G([['qol-gold-to-gem-conversion', 'Conversão de Gold em Gems'], ['qol-sell-titan-shard', 'Venda de Titan Shards']]),
    L(['Pode usar QUALQUER cabelo do Roblox Marketplace sem precisar ter o item', 'Accessory Slot 3'], 'Gamepass “Advanced Customization”'),
    G([['qol-advanced-customization-custom-hair', 'Cabelo do Marketplace'], ['qol-advanced-customization-accessory-slot-3', 'Accessory Slot 3']])
  ] },

{ id: 'bugs', cat: 'Qualidade de vida', title: 'Correções de bugs', intro: 'Lista completa de correções. Itens com “possivelmente” ainda precisam de confirmação em jogo.',
  blocks: [
    L([
      'Corrigidos alguns memory leaks',
      'Blessing “Compartmentalize” não aumentava o Maximum Awakening Bar durante uma transformação',
      'Skills “Berserk Mode” / “Rage Mode” / “Shifting” não terminavam sozinhas ao desequipar a skill já transformado',
      'Gold não era aumentado por multiplicadores de family na AFK Zone',
      'Partes do personagem apareciam estranhas ao trocar na visão em primeira pessoa',
      'Texto “EQUIP” da conquista não aparecia se você resgatasse depois de uma trade',
      'Stats mensais do leaderboard não resetavam direito se o servidor atualizasse seus stats em um mês novo',
      'Stat “Damage Resistance” não parava no máximo de 50.0%',
      'Alguns overlaps de UI no lobby de console',
      'Blessing “Chemical Purifier” causava menos DoT DAMAGE com o Shifter “Colossal”',
      'Ser arremessado ao usar a skill “Homing Missile” contra uma barreira do mapa',
      'Set “Icarus” não aparecia direito em “Loadouts”',
      'Skill “Combustive Counter” não matava titãs',
      'Algumas outfits atravessando o corpo',
      'Possivelmente corrigidos os arremessos absurdos com ODM vindos de ataques aleatórios, e talvez os membros faltando',
      'Não era possível vincular botões do mouse a ações nas configurações',
      'Ícone de bloqueio não sumia ao dar eject',
      'Dupes não passavam entre skills alternativas no modo “Waves” ao trocar entre ODM/TS',
      'Era possível usar como material o perk que você estava aprimorando',
      'Várias inconsistências nas descrições de tudo relacionado a equipamentos',
      'Titãs não eram marcados direito perto do fim de alguns objetivos',
      'Problemas ao shiftar nos barcos do “Armored Raid”',
      'Era possível burlar os I-Frames do Eren na Phase 2 do “Female Raid”',
      'Endlag do soco era cancelado se você fosse atingido como shifter no terceiro soco',
      'Era possível curar injuries antes de reentrar em uma partida pelo lobby',
      'Tudo que envolvia ignorar injuries era resetado ao reentrar no jogo',
      'Possivelmente corrigido ficar preso em cutscenes ao shiftar/dar eject',
      'Marcadores de objetivo duplicados',
      'Possivelmente corrigida a barra de vida do boss aparecendo durante cutscene',
      'Passiva “Defense Mastery” não escalava direito com buffs do stat “Damage Reduction”',
      'Stat “Conserve Chance” mostrava a proporção errada',
      'Stat “Aggro Range” não funcionava em perks',
      'Streak não era perdida direito no “Colossal Raid”',
      'Hitbox do ataque “Dive” ficava parada',
      'Memórias “Flashstep” / “Bloodthief” cancelavam algumas ações',
      'Quantidade de baús do “Emperor’s Trove” não atualizava ao receber uma “Emperor Key” do outro baú',
      'Possivelmente corrigidas revives que não funcionavam',
      'Alteradas as proporções de colisão entre titãs e shifters de jogadores (pode acabar com o problema de ser lançado para cima ao usar ataques)',
      'Não é mais possível construir uma portable resupply station perto de outra']),
  ] }
];
